<script lang="ts">
  import EmailIcon from 'svelte-icons/fa/FaAt.svelte'
  import GithubIcon from 'svelte-icons/fa/FaGithub.svelte'
  import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte'
  import MediumIcon from 'svelte-icons/fa/FaMediumM.svelte'
  import TelegramIcon from 'svelte-icons/fa/FaTelegramPlane.svelte'
  import TwitterIcon from 'svelte-icons/fa/FaTwitter.svelte'
</script>

<div class="lets-connect">
  <a href="mailto:hi@kaleabmelkie.com" title="Email (kaleab@kelaltech.com)">
    <EmailIcon />
  </a>
  <a href="https://linkedin.com/in/kaleabmelkie" title="LinkedIn (/in/kaleabmelkie)">
    <LinkedInIcon />
  </a>
  <a href="https://t.me/kaleab14" title="Telegram (@kaleab14)">
    <TelegramIcon />
  </a>
  <a href="https://twitter.com/kaleab14" title="Twitter (@kaleab14)">
    <TwitterIcon />
  </a>

  <span class="lets-connect-separator">|</span>

  <a href="https://github.com/kaleabmelkie" title="GitHub (@kaleabmelkie)">
    <GithubIcon />
  </a>
  <a href="https://medium.com/@kaleabmelkie" title="Medium (@kaleabmelkie)">
    <MediumIcon />
  </a>
  <!-- <a href="https://unsplash.com/@kaleab" title="Unsplash (@kaleab)">
    <UnsplashIcon />
  </a> -->

  <br />

  <div>
    <a href="https://www.upwork.com/fl/kaleabmelkie" title="Hire me on Upwork!" class="upwork-link">
      Let&apos;s work together!
    </a>
  </div>
</div>

<style>
  .lets-connect {
    display: block;

    padding: 48px 0 0;

    text-align: center;
  }

  a {
    display: inline-block;

    margin: 0 8px;

    width: 1em;
    height: 1.8em;

    font-size: 1.2em;
    line-height: 1.8em;
    text-align: center;
  }
  @media (max-width: 480px) {
    a {
      width: 1.1em;
    }
  }

  .lets-connect-separator {
    display: inline-block;

    padding: 0 4px;

    font-weight: 100;
    font-size: 1.8em;

    color: rgba(0, 0, 0, 0.07);
  }

  .upwork-link {
    margin-top: 48px !important;
    padding: 12px 24px !important;

    width: initial !important;
    height: initial !important;

    font-size: inherit !important;

    background-color: rgba(0, 0, 0, 0.07);
  }
</style>
