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

              <span class="section-content__header"> {{ education.school }} </span>
              <span class="section-content__subheader">{{ education.degree }}</span>
              <span class="section-content__text"> {{ education.timeperiod }} </span>
              <span class="section-content__text"> {{ education.description }} </span>
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
      </div>

      <div class="content__left">
        <div class="section">
          <div class="section-headline">
            {{ lang.about }}
          </div>

          <div class="section-content section-content--plain">
            {{ person.about }}
            <br/>
            <br/>
            {{ person.knowledge }}
          </div>
        </div>

        <div
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

    <img class="picture"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'resume';

export default Vue.component(name, getVueOptions(name));
</script>

<style lang="less" scoped>
@accent-color: rgba(0,0,0,0.08);
@banner-color: #1C817E;
@banner-height: 60px;
@picture-size: 120px;
@picture-offset: 275px;
@picture-offset-x: 35px;
@base-padding: 30px;
@left-column-width: 60%;


.resume {
  background-color: @banner-color;
  overflow: auto;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration-line: none;

  &:visited {
    color: inherit;
  }
}




ul {
  padding-left: 0px;
  margin-left: 2ch;
  margin-top: 0;
  margin-bottom: 0;
}
// li {
//   display: list-item;
//   padding-inline-start: 1ch;
//   list-style-type: ">";
// }

li {
  display: list-item;
  list-style-type: none;
  margin-right: 2ch;
}
li::before {
  content: ">";
  // padding-inline: 1ch;
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
  font-family:'ubuntu' !important;
  font-size: 1.1em;
}

// @media (max-width: 450px) {

// @media (min-width: 451px) {
// }


@media (min-width:401px) {
  .banner {
    width: calc(100% - @base-padding * 2);
    height: @banner-height;
    padding: @base-padding;
    background-color: @banner-color;

    color: white;

    &__fullname {
      font-size: 32px;
      overflow: auto;
    }

    &__position {
      font-size: 16px;
    }

    &__location {
      font-size: 12px;
    }
  }
  .picture {
    position: absolute;
    top: 0;
    left: (@base-padding * 2) - (@picture-size / 2) + @picture-offset;
    // left: 0;
    height: @picture-size;
    width: @picture-size;
    border-radius: 50%;
    border: 5px solid @accent-color;
    content: url('../../resume/id.jpg');
    z-index: 2;
  }
}

@media (max-width:400px) {
  .banner {
    width: calc(100% - @base-padding * 2);
    height: @banner-height;
    padding: @base-padding;
    background-color: @banner-color;

    color: white;

    &__fullname {
      font-size: 24px;
      overflow: auto;
    }

    &__position {
      font-size: 14px;
    }

    &__location {
      font-size: 12px;
    }
  }
  .picture {
    position: absolute;
    top: 0;
    left: (@base-padding * 2) - (@picture-size / 2) + @picture-offset ;
    height: @picture-size;
    width: @picture-size;
    border-radius: 50%;
    border: 5px solid @accent-color;
    content: url('../../resume/id.jpg');
    z-index: 2;
  }
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 550px;
  background: linear-gradient(to right,white 2px,transparent 2px),linear-gradient(to right,white 2px,transparent 2px)0 100%,linear-gradient(to left,white 2px,transparent 2px)100% 0,linear-gradient(to left,white 2px,transparent 2px)100% 100%,linear-gradient(to bottom,white 2px,transparent 2px),linear-gradient(to bottom,white 2px,transparent 2px)100% 0,linear-gradient(to top,white 2px,transparent 2px)0 100%,linear-gradient(to top,white 2px,transparent 2px)100% 100%;
  background-color: rgba(0, 0, 0, 0);
  background-repeat: no-repeat;
  background-size: 20px 20px;
  overflow: auto;

  &__left,
  &__right {
    height: auto;
    width: auto;
    padding: @base-padding;
    background-color: @accent-color;
    color: white;
  }

  &__left {
    flex: 1;

    .section-headline {
      color: white;
    }
  }

  &__right {
    width: @left-column-width !important;
  }
}

.section {
  margin: 20px 0;
}

.section-link,
.section-headline {
  display: flex !important;
  align-items: center;
  // color: @accent-color;
  color: white;
  display: inline-block;
  font-size: 1.2em;
  margin: 8px 0;

  &__icon {
    margin-right: 8px;
    font-size: 1.4em;
  }
}

.section-link {
  font-size: 1.1em;
  color: white !important;
  

  &__icon {
    color: white;
  }
}

.section-content {
  margin-top: 5px;
  padding-left: 16px;
  font-size: 16px;

  &__item {
    display: block;
    margin-bottom: 5px;
  }

  &__header {
    display: block;
    font-size: 1.1em;
    font-weight: 500;
  }

  &__subheader {
    display: block;
    font-weight: 400;
  }

  &__plain,
  &__text {
    display: block;
    font-size: 14px;

    &--light {
      font-size: 14px;

    }
    &--light::after {
      content: "\a";
      white-space: pre;
    }
  }

  &__plain {
    display: inline;
    font-weight: 300;
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
  margin-top: 5px;
  margin-bottom: 5px;
}

.grid-item {
  padding-right: 5px;
}

.squarred-grid-item {
  display: block;
  border: 1px solid white;
  color: white;
  margin-top: 5px;
  padding: 5px;
  font-size: 0.9em;
}
</style>
