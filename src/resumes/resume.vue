<template>
  <div class="resume">
    <div class="banner">
      <div class="banner__fullname">{{ person.name.first }} {{ person.name.middle }} {{ person.name.last }}</div>
      <div class="banner__position">{{ person.position }}</div>
      <div class="banner__location">Resides in {{person.birth.location}}</div>
    </div>

    <div class="content">
      <div class="content__right">
        <div class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">work</i>{{ lang.experience }}
          </div>

          <div class="section-content">
            <a target="_blank"
              v-for="(experience, index) in person.experience"
              :key="index"
              class="section-content__item"
              :href="experience.website">

              <span class="section-content__header">{{ experience.position }}</span>
              <span class="section-content__subheader">
              	{{ experience.company }}
                <span class="section-content__plain">{{ experience.location }} -</span>
                <div class="section-content__text" style="display:inline;">{{ experience.timeperiod }}</div>
              </span>

              <ul>
              <div v-for="(description, index) in experience.description"
              :key="index">
                <li class="section-content__text--light">{{ description }}</li>
              </div>
              </ul>
            </a>
          </div>
        </div>
        
        <div
          v-if="person.projects"
          class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">code</i>{{ lang.projects }}
          </div>

          <div class="section-content">
            <a target="_blank" v-for="(project, index) in person.projects" :key="index"
              class="section-content__item"
              :href="project.url">
              <span class="section-content__header"> {{ project.name }} </span>
              <span class="section-content__text">{{ project.platform }}</span>
              <span class="section-content__text"> {{ project.description }} </span>

            </a>
          </div>
        </div>

        <div class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">school</i>{{ lang.education }}
          </div>

          <div class="section-content">
            <a target="_blank"
              v-for="(education, index) in person.education"
              class="section-content__item"
              :key="index"
              :href="education.website">

              <span class="section-content__header">{{ education.degree }}</span>
              <span class="section-content__subheader">
                {{ education.school }}
                <div class="section-content__text" style="display:inline;">- {{ education.timeperiod }}</div>
                <span class="section-content__text"> {{ education.description }} </span>
              </span>
            </a>
          </div>
        </div>
<!--
        <div
          v-if="person.certificates"
          class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">card_membership</i>{{lang.certificates}}
          </div>

          <div class="section-content">
            <a target="_blank"
              v-for="(certificate, index) in person.certificates"
              class="section-content__item"
              :key="index"
              :href="certificate.website">

              <span class="section-content__header"> {{ certificate.name }} </span>
              <span class="section-content__text">{{ certificate.description }}</span>
            </a>
          </div>
        </div>
-->
      </div>

      <div class="content__left">
        <!-- <div class="section">
          <div class="section-headline">
            {{ lang.about }}
          </div>

          <div class="section-content section-content--plain">
            {{ person.about }}
            <br/>
            <br/>
            {{ person.knowledge }}
          </div>
        </div> -->

        <!-- <div
          v-if="person.skills"
          class="section">
          <div class="section-headline">
            {{ lang.skills }}
          </div>

          <div class="section-content-grid">
            <a target="_blank"
              v-for="(skill, index) in person.skills"
              class="grid-item"
              :key="index"
              :href="skill.url">
              <span class="squarred-grid-item">
                {{ skill.name }}
              </span>
            </a>
          </div>
        </div> -->
        <div
          v-if="person.skills"
          class="section">

          <div class="section-headline">
            Technical Skills
          </div>

          <div class="section-content-grid">
            <a
              v-for="(skill, index) in person.skills.filter(s => s.category === 'technical')"
              :key="'tech-' + index"
              class="grid-item"
              target="_blank"
              :href="skill.url">
              <span class="squarred-grid-item">
                {{ skill.name }}
              </span>
            </a>
          </div>

          <div class="section-headline">
            Professional Skills
          </div>

          <div class="section-content-grid">
            <a
              v-for="(skill, index) in person.skills.filter(s => s.category === 'professional')"
              :key="'prof-' + index"
              class="grid-item"
              target="_blank"
              :href="skill.url">
              <span class="squarred-grid-item">
                {{ skill.name }}
              </span>
            </a>
          </div>
        </div>

        <div class="section">
          <div class="section-headline">
            {{ lang.contact }}
          </div>

          <div class="section-content section-content--plain">
            <!--
            <div class="section-link">
              <i class="section-link__icon material-icons">business</i>{{ person.contact.street }}
            </div>
            -->
            <a target="_blank"
              class="section-link"
              :href="contactLinks.email">
              <i class="section-link__icon fa fa-paper-plane fa-fw"></i>{{ person.contact.email }}
            </a>

            <!--<div class="section-link">
              <i class="section-link__icon material-icons">phone</i>{{ person.contact.phone }}
            </div>
            -->
            <a target="_blank"
              v-if="person.contact.website"
              class="section-link"
              :href="contactLinks.website">
              <i class="section-link__icon fa fa-globe fa-fw"></i>{{ person.contact.website }}
            </a>

            <a target="_blank"
              v-if="person.contact.linkedin"
              class="section-link"
              :href="contactLinks.linkedin">
              <i class="section-link__icon fa fa-linkedin fa-fw"></i>{{ person.contact.linkedin }}
            </a>

            <a target="_blank"
              v-if="person.contact.github"
              class="section-link"
              :href="contactLinks.github">
              <i class="section-link__icon fa fa-github fa-fw"></i>{{ person.contact.github }}
            </a>

            <a target="_blank"
              v-if="person.contact.medium"
              class="section-link"
              :href="contactLinks.medium">
              <i class="section-link__icon fa fa-medium fa-fw"></i>{{ person.contact.medium }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <img class="picture"/> -->
  </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'resume';

export default Vue.component(name, getVueOptions(name));
</script>

<style lang="less" scoped>
@accent-color: #1F4E79;
@banner-color: #FFFFFF;
@banner-height: 60px;
@picture-size: 120px;
@picture-offset: 275px;
@picture-offset-x: 35px;
@base-padding: 30px;
@left-column-width: 60%;

.resume {
  background-color: #ffffff;
  color: #000000;
  overflow: auto;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: @accent-color;
  }
}

ul {
  padding-left: 0;
  margin-left: 2ch;
  margin-top: 0;
  margin-bottom: 0;
}

li {
  display: list-item;
  list-style-type: none;
  margin-right: 2ch;
}

li::before {
  content: ">";
  color: @accent-color;
  margin-inline-end: 1ch;
  margin-left: -2ch;
  width: 1ch;
}

@font-face {
  font-family: ubuntu;
  src: url('~@/assets/font/Ubuntu-R.ttf');
}

.resume {
  position: relative;
  font-family: 'ubuntu' !important;
  font-size: 1.1em;
}

@media (min-width:401px) {
  .banner {
    width: calc(100% - @base-padding * 2);
    height: @banner-height;
    padding: @base-padding;
    background: @banner-color;
    border-bottom: 3px solid @accent-color;
    color: #000;

    &__fullname {
      font-size: 32px;
      font-weight: 700;
      color: @accent-color;
      overflow: auto;
    }

    &__position {
      font-size: 16px;
      color: @accent-color;
    }

    &__location {
      font-size: 12px;
      color: #555;
    }
  }

  .picture {
    position: absolute;
    top: 0;
    left: (@base-padding * 2) - (@picture-size / 2) + @picture-offset;
    height: @picture-size;
    width: @picture-size;
    border-radius: 50%;
    border: 4px solid @accent-color;
    content: url('../../resume/id.jpg');
    z-index: 2;
  }
}

@media (max-width:400px) {
  .banner {
    width: calc(100% - @base-padding * 2);
    height: @banner-height;
    padding: @base-padding;
    background: @banner-color;
    border-bottom: 3px solid @accent-color;
    color: #000;

    &__fullname {
      font-size: 24px;
      font-weight: 700;
      color: @accent-color;
      overflow: auto;
    }

    &__position {
      font-size: 14px;
      color: @accent-color;
    }

    &__location {
      font-size: 12px;
      color: #555;
    }
  }

  .picture {
    position: absolute;
    top: 0;
    left: (@base-padding * 2) - (@picture-size / 2) + @picture-offset;
    height: @picture-size;
    width: @picture-size;
    border-radius: 50%;
    border: 4px solid @accent-color;
    content: url('../../resume/id.jpg');
    z-index: 2;
  }
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 550px;
  background: #ffffff;
  overflow: auto;

  &__left,
  &__right {
    height: auto;
    width: auto;
    padding: @base-padding;
    background: #ffffff;
    color: #000000;
  }

  &__left {
    flex: 1;
    border-right: 1px solid #d8d8d8;
  }

  &__right {
    width: @left-column-width !important;
  }
}

.section {
  margin: 20px 0;
}

.section-headline {
  display: flex !important;
  align-items: center;
  color: @accent-color;
  font-size: 1.2em;
  font-weight: 700;
  margin: 10px 0;
  border-bottom: 2px solid @accent-color;
  padding-bottom: 4px;

  &__icon {
    margin-right: 8px;
    font-size: 1.3em;
    color: @accent-color;
  }
}

.section-link {
  display: flex;
  align-items: center;
  color: @accent-color;
  font-size: 1.05em;
  margin: 6px 0;

  &:hover {
    color: @accent-color;
  }

  &__icon {
    color: @accent-color;
    margin-right: 8px;
  }
}

.section-content {
  margin-top: 8px;
  padding-left: 16px;
  font-size: 16px;
  color: #000;

  &__item {
    display: block;
    margin-bottom: 16px;
  }

  &__header {
    display: block;
    font-size: 1.08em;
    font-weight: 600;
    color: @accent-color;
  }

  &__subheader {
    display: block;
    color: #333;
    font-weight: 500;
  }

  &__plain,
  &__text {
    display: block;
    font-size: 14px;
    color: #444;

    &--light {
      font-size: 14px;
      color: #444;
    }

    &--light::after {
      content: "\a";
      white-space: pre;
    }
  }

  &__plain {
    display: inline;
    font-weight: 400;
  }

  &__item-grid {
    flex: 1 1 0;
    margin-bottom: 5px;
    padding-right: 5px;
  }

  &--plain {
    padding: 0;
  }
}

.section-content-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-bottom: 8px;
}

.grid-item {
  padding-right: 6px;
}

.squarred-grid-item {
  display: block;
  border: 1px solid @accent-color;
  color: @accent-color;
  background: #f7f9fc;
  border-radius: 3px;
  margin-top: 6px;
  padding: 6px 10px;
  font-size: 0.9em;
  font-weight: 500;
}
</style>