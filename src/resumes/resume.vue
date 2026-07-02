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

          <div class="letter">
        <p>Dear [Hiring Manager Name],</p>

        <p>
          For almost ten years I have built and automated platforms inside NatWest Group, progressing from an apprenticeship in WebSphere to engineering the bank's strategic on-premise Container-as-a-Service capability. Today, I work as part of the platform engineering team responsible for shared OpenShift capabilities used across approximately 300 engineering teams. That progression has given me deep institutional knowledge of the bank alongside a proven ability to design and deliver platform products that simplify how other engineers build and operate software.
        </p>

        <p>
          My work is centred on turning platform requirements into reusable engineering capabilities. I develop policy-driven automation and GitLab CI/CD workflows that enable GitOps orchestration, HashiCorp Vault integration and customer guardrails across 32 OpenShift clusters spanning four environments. Rather than relying on manual processes, I aim to express platform standards as executable patterns that allow engineering teams to consume secure, consistent capabilities by default. Before joining the platform engineering team, I spent two years in a cloud R&amp;D function situated in Core Solutions, prototyping technologies such as cert-manager, Kubernetes and Vault that have since become integral parts of the platforms I support today.
        </p>

        <p>
          Automation has been the common thread throughout my career. Whether replacing manual licensing across approximately 5,000 servers as an apprentice, automating upgrades for more than 1,600 deployment agents across 50 teams, or engineering policy-driven platform automation for ~1200 applications running on openshift. My focus has remained the same: identify repetitive, high-friction work and replace it with reliable, reusable software.
        </p>

        <p>
          Working in a regulated financial institution has made secure-by-design engineering second nature. Policy-driven governance, automated certificate management, secrets management, CI/CD and platform guardrails are built into the platforms I help deliver rather than added afterwards. I work closely with principal engineers, architects and stakeholders to shape technical direction, while mentoring colleagues, producing documentation and helping teams adopt new platform capabilities. I enjoy translating complex technical problems into pragmatic engineering solutions that enable others to deliver software more effectively.
        </p>

        <p>
          The same engineering mindset continues outside work. Rather than building projects for the sake of technology, I tend to identify problems that existing software does not adequately solve and build the missing capability. My open-source work includes reverse-engineering TP-Link's encrypted provisioning protocol to enable cloudless onboarding of modern Tapo cameras, designing a configurable smartwatch application capable of modelling arbitrary REST APIs, developing a local-first home automation platform in Go, and engineering a Raspberry Pi Pico modification that adds Wi-Fi and a REST API to an otherwise closed consumer device. Together these projects span reverse engineering, distributed systems, embedded development and API design, and demonstrate the same curiosity and systems thinking that I bring to my professional work.
        </p>

        <p>
          Alongside a demanding engineering role, I have continued to invest heavily in my own development. I have achieved several Red Hat certifications centered around Kubernetes and OpenShift Administration, while also completing four Open University engineering modules with Distinction. I routinely evaluate and adopt emerging technologies where they provide genuine value, making extensive use of modern AI-assisted engineering tooling to accelerate development, improve software quality and support rapid experimentation and prototyping. I believe the role of a senior engineer extends beyond technical delivery, and I place equal importance on mentoring colleagues and helping raise the capability of the wider team.
        </p>

        <p>
          This role brings together everything I have been working towards over the past decade: software engineering, platform engineering and automation at enterprise scale. I would welcome the opportunity to continue building platform products that help other engineers deliver change faster, more safely and with greater confidence, while contributing to the continued evolution of NatWest Group's engineering platforms.
        </p>

        <p>
          Kind regards,<br>
          Josh
        </p>
          </div>
        </div>
      </div>
    </div>
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
@left-column-width: 100%;

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