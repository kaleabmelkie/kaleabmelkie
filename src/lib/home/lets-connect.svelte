<script lang="ts">
  import EmailIcon from 'svelte-icons/fa/FaAt.svelte'
  import GithubIcon from 'svelte-icons/fa/FaGithub.svelte'
  import LinkedInIcon from 'svelte-icons/fa/FaLinkedinIn.svelte'
  import MediumIcon from 'svelte-icons/fa/FaMediumM.svelte'
  import TelegramIcon from 'svelte-icons/fa/FaTelegramPlane.svelte'
  import TwitterIcon from 'svelte-icons/fa/FaTwitter.svelte'

  import UnsplashIcon from '../../assets/icons/unsplash.svg.svelte'
</script>

<div class="lets-connect">
  <a href="mailto:hi@kaleabmelkie.com" title="Email (hi@kaleabmelkie.com)">
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

  <span class="lets-connect-separator" />

  <a href="https://github.com/kaleabmelkie" title="GitHub (@kaleabmelkie)">
    <GithubIcon />
  </a>
  <a href="https://medium.com/@kaleabmelkie" title="Medium (@kaleabmelkie)">
    <MediumIcon />
  </a>
  <a href="https://unsplash.com/@kaleab" title="Unsplash (@kaleab)">
    <UnsplashIcon />
  </a>

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
    vertical-align: middle;

    margin: 0 6px;

    width: 1em;
    height: 1.5em;

    font-size: 1.2em;
    line-height: 1.8em;
    text-align: center;
  }

  .lets-connect-separator {
    display: inline-block;
    vertical-align: middle;

    margin: 0 4px;

    height: 1.8em;
    width: 1px;

    font-weight: 100;

    border-radius: 1px;

    background-color: rgba(0, 0, 0, 0.07);
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
