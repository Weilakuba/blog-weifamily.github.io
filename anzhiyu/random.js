var posts=["undefined/iphone17-pro-camera-upgrade/","undefined/create-your-own-comic-style-avatar/","undefined/midjourney-dragon-ball-avatar/","undefined/midjourney-gundam-coloring-book/","undefined/midjourney-ukiyo-e-anime/","undefined/tesla-updates-mission-statement/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };