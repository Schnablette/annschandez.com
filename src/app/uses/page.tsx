import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'The software and gadgets I use and recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="The software and gadgets I use and recommend."
      intro="While there are many ways to get a job done, this is how I get the job done. Since the Pandemic, these staples follow me from setup to setup."
    >
      <div className="space-y-20">
        <ToolsSection title="Productivity">
          <Tool title="Claude.ai">
            Claude might as well be my mentor and business partner. He
            single-handedly taught me how to leverage AWS, provided options to
            guide my family's decision on where to move, and gifted endless
            inspiration for content. All for free.
          </Tool>
          <Tool title="Passion Planner">
            My one tried and true journal that's been with me since the
            Pandemic. I have the version where it's year-agnostic, so I can use
            the next page for any date, no matter how long it's been since I
            made my last entry.
          </Tool>
          <Tool title="Pip Decks">
            I consistantly use the tactics in the decks to build workshop
            curriculum, guide personal discovery, and generate business ideas.
          </Tool>
          <Tool title="Notion">
            Yes, I am on the Notion train. Whether it's for project management
            for my daily life, saving my written musings, or launching an easy
            startup landing page, Notion truly is my favorite writing tool.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Cursor">
            AI has transformed the way I code. It makes me faster and more
            competant. Debugging is as easy as asking my Cursor Composer, "why
            isn't it doing _____?" It's seriously a game changer. Also, it's
            free.
          </Tool>
          <Tool title="Github">
            This is where I keep all my cloud-based code repositories. I
            appreciate how easy it is to share my work with others using my
            Github profile.
          </Tool>
          <Tool title="AWS">
            I'm learning this tool currently. I'm convinced it's the cheapest
            way to validate a business idea by using SES, Route 53, and Amplify
            to spin up a simple landing page with email capture.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            An industry standard but still important to note. Besides my
            sketchbook, this is the only tool I use for UI design.
          </Tool>
          <Tool title="Affinity suite">
            Last year, I switched from Adobe to Affinity. All my logowork and
            print design are now done in Affinity. It has replaced my need for
            Illustrator, Photoshop, and Publisher.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Videography">
          <Tool title="Canon EOS M6 Mark II">
            This is my second Canon camera. I love how the screen flips around,
            allowing me to see the video composition while being in front of the
            camera.
          </Tool>
          <Tool title="Canon EF-M 15-45mm f/3.5-6.3 Image Stabilization STM Zoom Lens">
            My favorite lens for my favorite camera. I generally use this for
            shooting Youtube videos, but I also have taken it into the wild to
            capture animals at the zoo, architecture in our city, and small
            details in flowers.
          </Tool>
          <Tool title="OBS">
            This powerful tool is free and open source. I use it to screen
            capture for Youtube videos. It's quite easy to superimpose my face
            over the screen capture, and unlike many online tools, it has
            unlimited video capture.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Workstation">
          <Tool title="Bose 700s Noise Cancellation Headphones">
            My absolute favorite headphones. The new QC Ultras don't provide as
            much noise cancellation, nor do they block out as much background
            noise while on calls. I just purchased new ear cushions after having
            the same cushions for four years. I intend to use these headphones
            for a long time and was devastated when they were discontinued.
          </Tool>
          <Tool title="Logitec MX Anywhere 3 For Mac">
            This wireless, pinktooth mouse can connect to up to three different
            devices. Which is perfect, because I have three laptops I use
            between my work and personal life. It switches devices with one
            click.
          </Tool>
          <Tool title="Keychron Q2 Pro">
            My personal keyboard. I've made plans for gutting it and replacing
            the key switches and caps, but so far, its factory switches/caps are
            perfectly fine.
          </Tool>
          <Tool title="Dell Ultrasharp 27 4k Monitor">
            In my current setup, I use two screens—one being this monitor. It's
            crisp and has great color vibrancy. It can keep up with my Apple
            laptop, which I love.
          </Tool>
          <Tool title="AK Racing Gaming Chair">
            This is the only company that makes semi-affordable gaming chairs
            comfortable for people under 4'4. The back and headrest are
            perfectly sized. Maybe short people should complain more often.
          </Tool>
          <Tool title="14” MacBook Pro, M1 Max, 64GB RAM (2021)">
            For design, frontend engineering, and daily usage, there is no
            competitor for me. Apple is the only way to go.
          </Tool>
          <Tool title="Standing Desk">
            I try to avoid sitting all day, but that's difficult when your job
            involves using a computer. I don't always stand, but when I do, it's
            with my L-shaped standing desk.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
