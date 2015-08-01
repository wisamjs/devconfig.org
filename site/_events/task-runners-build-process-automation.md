---
date: 2015-05-12 18:30:00
title: "Task Runners and Build Process Automation"
summary: "A one of a kind event, the first ever official Yeoman Hackathon!"
tags: [Meetup]
layout: event
redirect_from: /events/task-runners-build-processes-automation/
speakers: 
  - name: Kate Hudson
    twitter: k88hudson
    photo: https://pbs.twimg.com/profile_images/529313549227524097/07GmI4zw.jpeg
    bio: "Kate Hudson is a web engineer from Toronto, Ontario. She is currently working for Mozilla on building applications for the greater good using nodejs, front-end javascript, and Android."

  - name: Kent English
    twitter: kentenglish
    photo: https://pbs.twimg.com/profile_images/378800000833064827/ee40e2fe8dc4dbecb0ebd23e25f47e54.jpeg
    bio: "Kent is a senior developer at CrowdRiff. He has been working with Go and React a lot lately, and is inordinately fond of saskatoon pie and gifs."

  - name: Mark Appleby
    twitter: themarkappleby
    photo: https://pbs.twimg.com/profile_images/2326678116/ruuzp71rby6rp4d6zszp_400x400.jpeg
    bio: "Mark is a self-taught developer. Originally studying and working in the industry as a graphic designer, Mark now works at The Working Group as a front-end developer. In this role, he focuses his passion and experience in helping to bridge the gap between design and development. Mark has worked with a diverse range of clients, from startups to national organizations like The Boys and Girls Clubs of Canada, Sobeys, and Rogers."

  - name: Robyn Larsen
    twitter: robyn_larsen
    photo: http://www.campfestival.ca/wp-content/uploads/2014/07/camp-robyn_larsen-195x195.jpg
    bio: "Former nuclear engineer now blurring the lines between work and play as a front end web developer, mentor and entrepreneur. Her tools of choice are HTML5, CSS3, Sass, responsive design, and JavaScript. She lives by challenging assumptions, improving process, and never settles. Now you can now find her working at Normative, Toronto based design firm that specializes in designing for the networked world."

  - name: Vlad Filippov
    twitter: vladikoff
    photo: https://pbs.twimg.com/profile_images/378800000462323214/084b64c704c66991703970da01e38f8f.png
    bio: "Vlad Filippov is a software engineer working on cloud services at Mozilla. He is a contributor to various large and well-known open source projects, including Grunt and Firefox Accounts. He has also been deeply immersed in software development since last century. His work has roamed widely: from desktop web development (client and server), to mobile, Android and 3D games."

organizers:
  - name: DevConfig
    photo: /assets/images/logo.png
    link: https://devconfig.org/

  - name: Karma Laboratory
    photo: /assets/images/friends/karmalab.jpg
    link: http://karma-laboratory.com/

  - name: Toronto JavaScript
    photo: http://photos1.meetupstatic.com/photos/event/3/8/c/4/global_430214532.jpeg
    link: http://www.meetup.com/torontojs/

  - name: Pearl Chen
    photo: https://pbs.twimg.com/profile_images/538022071054258177/zew_jAxC.png
    link: https://twitter.com/PearlChen

  - name: Ahmad Nassri
    photo: https://pbs.twimg.com/profile_images/553582327029186561/_vdQGKus.jpeg
    link: https://twitter.com/AhmadNassri

  - name: Dann Toliver
    photo: https://pbs.twimg.com/profile_images/514296465309442049/-1pHjlrl_400x400.jpeg
    link: https://twitter.com/dann
---

For this DevConfig meetup, we've partnered with [Dann Toliver](https://twitter.com/dann) of [Toronto JavaScript Hackers](http://www.meetup.com/torontojshackers) to bring you an event dedicated to front end task runners and automated build processes. 

Task runners will make your developer life more productive by automating all the tedious tasks that you might currently do manually such as: compilation, minification, unit testing, etc. Popular task runners include Grunt or Gulp but there are more popping up. With all these options, how can you figure out which one is right for you?

That is why we are throwing away the PowerPoint slide decks for the night and only showing you real world usage. We'll have short show & tell demos of actual projects using everything from Grunt or Gulp to NPM scripts. See various ways these tools are used in production, how they set it up, and learn what the presenters struggled with and their solutions.

### Our show & tell presenters include:

<div>
  {% for speaker in page.speakers %}
    <div class="row">
      <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
        <a class="thumbnail" href="https://twitter.com/{{ speaker.twitter }}" target="_blank"><img src="{{ speaker.photo }}" alt="{{ speaker.name }}"></a>
      </div>

      <div class="col-lg-19 col-md-10 col-sm-8 col-xs-8">
        <strong>{{ speaker.name }}</strong>&nbsp;<small><a href="https://twitter.com/{{ speaker.twitter }}"><i class="fa fa-twitter"></i> @{{ speaker.twitter }}</a></small>
        <p>{{ speaker.bio }}</p>
      </div>
    </div>
  {% endfor %}
</div>

After the demos, feel free to crack open your laptop and work on improving your own developer workflow. Whether this is your first task runner or you just want to try a new one, the presenters will stick around to point you in the right direction or just talk shop.

Developers from all walks of life are encouraged to attend. This is an evening for both beginners, intermediates, and experts to learn from each other. Attendees must adhere to the [Bento Miso Code of Conduct](https://bentomiso.zendesk.com/hc/en-us/articles/201812303).

<div class="row">
  <div class="col-lg-8">
    <table class="table table-striped table-bordered">
      <tr>
        <th width="75">When</th>
        <td>Tuesday, May 12, 2015 @ 6:30 PM - 9 PM</td>
      </tr>
      <tr>
        <th>Where</th>
        <td><a target="_blank" href="https://goo.gl/maps/uLzLG"><strong>Bento Miso</strong> &mdash; 862 Richmond Street West, Suite 100</a></td>
      </tr>
    </table>
  </div>

  <div class="col-lg-4">
    <a class="btn btn-danger btn-block" href="http://www.meetup.com/torontojs/events/220945510/"><i class="fa fa-fw fa-ticket"></i> Book your spot</a>
    <a class="btn btn-success btn-block" href="#share"><i class="fa fa-fw fa-share"></i> Spread the word</a>
  </div>
</div>

----

### Organizers

<div class="row">
  {% for organizer in page.organizers %}
    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
      <a class="thumbnail" href="{{ organizer.link }}" target="_blank"><img src="{{ organizer.photo }}" alt="{{ organizer.name }}"></a>
    </div>
  {% endfor %}
</div>

----

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11548.43628875193!2d-79.380953!3d43.645899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x38fdb7d96640b4da!2sBitmaker+Labs!5e0!3m2!1sen!2sus!4v1408112350914"></iframe>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2887.174796643479!2d-79.41226329999999!3d43.64453150000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34e2e473aa19%3A0x437e0c472348702f!2s862+Richmond+St+W+%23100%2C+Toronto%2C+ON+M6J+1C9%2C+Canada!5e0!3m2!1sen!2sus!4v1429032120376"></iframe>
</div>
