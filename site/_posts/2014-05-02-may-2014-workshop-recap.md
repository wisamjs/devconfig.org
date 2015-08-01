---
title: "May 2014 Workshop Recap"
summary: "A full house, awesome mentors and lots of learning!"
tags: [Workshop]
category: blog
layout: post

gallery: 
  - Some of our mentors talking tech
  - Pearl Takling AngularJS
  - Mentors helping out
  - Mentors answering questions
  - Mentors answering questions
  - A full house!
  - Learning in progress
---

We wraped up our first workshop: "Create web apps with Yeoman and AngularJS" with great success!
We got a full house, equal turn out of men and women, and awesome mentors who helped make this workshop a success!

Here are some of the highlights in pictures. View the full album in the event page on [meetup.com](http://www.meetup.com/dev-config/photos/22073862/)

Be sure to join the [meetup group](http://www.meetup.com/dev-config/) to stay informed of upcoming workshops and events.

**A big THANK YOU again to Our community supporters:**

[@CBCDigital](http://twitter.com/CBCDigital), [HackerYou](http://hackeryou.com/), [GDG Toronto](http://www.meetup.com/GDG-Toronto/), [Addy Osmani](http://addyosmani.com/blog/), and all the volunteer mentors.

<div id="carousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    {% for caption in page.gallery %}
      <li data-target="#carousel" data-slide-to="{{ forloop.index - 1}}" {% if forloop.index == 1 %}class="active"{% endif %}></li>
    {% endfor %}
  </ol>

  <div class="carousel-inner">
    {% for caption in page.gallery %}
      <div class="item {% if forloop.index == 1 %}active{% endif %}">
        <img src="/assets/images/{{ page.id }}/{{ forloop.index }}.jpg" alt="{{ caption }}">
        <div class="carousel-caption">
          <p>{{ caption }}</p>
        </div>
      </div>
    {% endfor %}
  </div>

  <a class="left carousel-control" href="#carousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
