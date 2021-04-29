<script>
  const src = 'https://www.gravatar.com/avatar/c8fdec81587d62796a4561cfe1a536d0'
</script>

<div class="profile-photo">
  <div class="profile-photo-frame">
    <img
      alt="Kaleab S. Melkie's Avatar"
      src="{src}?size=360"
      sizes="(min-width: 960px) 33vw, (min-width: 1440px) 25vw, (max-width: 720px) 56vw, (max-width: 480px) 75vw, 38vw"
      loading="eager"
    />
  </div>
</div>

<style>
  .profile-photo {
    display: block;

    padding: 24px 0 0;

    text-align: center;
  }

  .profile-photo-frame {
    display: inline-block;
    overflow: hidden;
    position: relative;

    width: 38vh;
    height: 38vh;

    max-width: 50vw;
    max-height: 50vw;

    border: 1.4vh solid rgba(0, 0, 0, 0.063);
    border-radius: 50%;

    background-color: rgb(255, 255, 255);
    box-shadow: 0 7px 42px -14px rgba(0, 0, 0, 0.28);
  }
  .profile-photo-frame > img {
    width: 100%;
    height: 100%;

    filter: grayscale(1);
  }

  @media (min-width: 960px) {
    .profile-photo-frame {
      max-width: 33vw;
      max-height: 33vw;

      margin: 1vh 0 0.5vh;
    }
  }

  @media (min-width: 1440px) {
    .profile-photo-frame {
      max-width: 25vw;
      max-height: 25vw;

      margin: 3vh 0 1vh;
    }
  }

  @media (max-width: 720px) {
    .profile-photo-frame {
      max-width: 56vw;
      max-height: 56vw;
    }
  }

  @media (max-width: 480px) {
    .profile-photo-frame {
      max-width: 75vw;
      max-height: 75vw;
    }
  }
</style>
