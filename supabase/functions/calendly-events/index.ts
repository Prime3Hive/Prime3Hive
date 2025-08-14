import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const CALENDLY_ACCESS_TOKEN = Deno.env.get('CALENDLY_ACCESS_TOKEN')
    
    if (!CALENDLY_ACCESS_TOKEN) {
      throw new Error('CALENDLY_ACCESS_TOKEN not found')
    }

    // Get user info first to get the organization URI
    const userResponse = await fetch('https://api.calendly.com/users/me', {
      headers: {
        'Authorization': `Bearer ${CALENDLY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!userResponse.ok) {
      throw new Error(`Calendly user API error: ${userResponse.status}`)
    }

    const userData = await userResponse.json()
    const organizationUri = userData.resource.current_organization

    // Get scheduled events
    const eventsResponse = await fetch(`https://api.calendly.com/scheduled_events?organization=${organizationUri}&status=active&sort=start_time:desc`, {
      headers: {
        'Authorization': `Bearer ${CALENDLY_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    if (!eventsResponse.ok) {
      throw new Error(`Calendly events API error: ${eventsResponse.status}`)
    }

    const eventsData = await eventsResponse.json()

    // Get invitee details for each event
    const eventsWithInvitees = await Promise.all(
      eventsData.collection.map(async (event: any) => {
        try {
          const inviteesResponse = await fetch(`https://api.calendly.com/scheduled_events/${event.uri.split('/').pop()}/invitees`, {
            headers: {
              'Authorization': `Bearer ${CALENDLY_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
          })

          if (inviteesResponse.ok) {
            const inviteesData = await inviteesResponse.json()
            return {
              ...event,
              invitees: inviteesData.collection
            }
          }
          return event
        } catch (error) {
          console.error('Error fetching invitees:', error)
          return event
        }
      })
    )

    return new Response(
      JSON.stringify({ events: eventsWithInvitees }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})