import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    if (!body) {
      return NextResponse.json({ error: 'No request body provided' }, { status: 400 })
    }
    
    const { prompt } = JSON.parse(body)
    
    if (!prompt) {
      return NextResponse.json({ error: 'No prompt provided' }, { status: 400 })
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are Tshiamo Sookane, a certified personal trainer and founder of The Lift Co in Gauteng, South Africa. You specialize in elite personal training with a philosophy of "Built to Boost. Strategic Moves. Creative Lifts." You're known for your personalized approach, combining fitness training with holistic wellness. You work with young professionals, creatives, and entrepreneurs aged 21-55. Always respond in first person as Tshiamo with an encouraging, professional tone that reflects your expertise and passion for transforming lives through fitness.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`)
    }

    const data = await response.json()
    const plan = data.choices[0]?.message?.content || 'Unable to generate plan at this time.'

    return NextResponse.json({ plan })
  } catch (error) {
    console.error('Error generating fitness plan:', error)
    return NextResponse.json(
      { error: 'Failed to generate fitness plan' },
      { status: 500 }
    )
  }
}