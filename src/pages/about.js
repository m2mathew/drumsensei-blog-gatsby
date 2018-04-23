import React from 'react'
import Link from 'gatsby-link'

// Component Definition
const About = () => (
  <div>
    <section>
      <h3>Howdy! I’m Michael D. Mathew</h3>
      <div>
        But most people call me Mike. I’m a developer/designer & musician based out of the Dallas/Fort Worth area. I like to make pretty things that help people. For the last two years (and counting) I have worked as a software engineer at Call-Em-All in Frisco, TX. I also help organize the <a href="https://www.meetup.com/ReactJS-Dallas/">ReactJS Dallas software meetup</a>. My software development career kicked off at the (former) code school in Austin, Texas called The Iron Yard.
      </div>
      <div>
        As a longtime musician and music educator I worked with some terrific programs as a performer and teacher. The list is long but includes such powerhouses as Texas A&M University-Commerce, Berkner High School, North Mesquite High School, Trinity High School, Flower Mound High School, Texas Christian University, University of Texas at Arlington, and several others all over the state of Texas. On occasion I can be seen hitting drums or marimbas or timpani and sometimes even get to write music for other people and groups. Thankfully, I do get to play drums at church every weekend, so my funky beats continue to thrive.
      </div>
      <div>
        My most important work: husband to my lovely wife, father to my three wonderful children, and guardian for my little brother. I enjoy any good music, Apple computers and products, and the Oxford comma. By night I stay up learning everything that I don't yet know, or I'm reading about how I should be sleeping more. My family and friends are awesome and a continual blessing in my life.
      </div>
    </section>
    <section>
      <h3>Find Me</h3>
      <div>
        I tweet as <a href="https://twitter.com/drumsensei">@drumsensei</a>, and I spend a good bit of time in the open-source awesomeness of <a href="https://github.com/m2mathew">GitHub</a>, too.
      </div>
    </section>
    <section>
      <h3>Colophon</h3>
      <div>
        This site is built with <a href="">GatsbyJS</a> which means most content was written using <a href="https://daringfireball.net/projects/markdown/">Markdown</a> and <a href="">ReactJS</a>. The original incarnation of the site was a <a href="http://realmacsoftware.com/rapidweaver/">RapidWeaver</a> project. After a brief rewrite in Jekyll we end up here! Hosting by DreamHost. Coding is done in Atom with generous assistance from the Chrome inspector. I use a 15" 2015 Retina MacBook Pro with a few meaningful stickers and sometimes a fairly large iMac when coding from the homestead. As a constant learner, I will likely be poking and prodding here and there throughout this space, so it might not always look the same. Also, there is little guarantee that it will appear correctly on older browsers, so <a href="https://browsehappy.com">keep them up to date</a>!
      </div>
    </section>
    <section>
      <h3>Why Drumsensei?</h3>
      <div>
        When I taught at Trinity High School I referred to my cymbal line as the "cymbal ninjas". They were an all-female, extremely intelligent, no-nonsense group of people. All of the extraordinary moves and sounds they made were superbly choreographed, and they did not put up with any halfway effort. After some interval of time, all of the students began to call me "sensei." So, drumsensei seemed appropriate.
      </div>
    </section>
    <Link to="/">Go dig through some posts</Link>
  </div>
)

export default About
