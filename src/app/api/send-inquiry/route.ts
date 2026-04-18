import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { plan, name, email } = await request.json()

    if (!plan || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    
    const emailContent = `
Ny forespørgsel fra Hejstudio.dk — ${plan}
==========================================

Løsning: ${plan}

Navn: ${name}

E-mail: ${email}

Tidspunkt: ${timestamp}

Kilde: Pricing sektionen
    `.trim()

    console.log('=== NEW INQUIRY ===')
    console.log(emailContent)
    console.log('===================')

    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry submitted successfully' 
    })
  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}