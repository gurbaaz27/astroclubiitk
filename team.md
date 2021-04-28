---
layout: page
title: Team
subtitle: Free free to contact any of us 😄. <br>We would love to interact with you!
---

### Current Coordinators (2021-22)

<div class="container pt-6 pb-6">
    <div class="row pt-6 pb-6">
        {% assign teams = site.team %}
        {% for team in teams %}
        <div class="col-12 col-md-6 mb-2">
            <div class="card border-0">
                {% if team.image_path %}
                <img alt="{{ team.title }}" class="img-fluid mb-2 card-img-top" src="{{ site.baseurl }}{{ team.image_path }}" />
                {% endif %}
                <div class="card-body text-center">
                    <div class="card-title mb-0 text-black-50">{{ team.title }}</div>
                    <div class="card-text text-black-50">{{ team.info }}</div>
                    <a target="_blank" href="https://facebook.com/{{ team.facebook }}" title="Facebook">
                        <span class="fa-stack fa-lg" aria-hidden="true">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </div>                
            </div>
        </div>
        {% endfor %}
    </div>
</div>

### Ex-Coordinators (2022-23)

🚧 Under Construction...