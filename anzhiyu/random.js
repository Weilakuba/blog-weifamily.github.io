var posts=["undefined/midjourney-gundam-coloring-book/","undefined/create-your-own-comic-style-avatar/","undefined/iphone17-pro-camera-upgrade/","undefined/midjourney-ukiyo-e-anime/","undefined/midjourney-dragon-ball-avatar/","undefined/tesla-updates-mission-statement/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };