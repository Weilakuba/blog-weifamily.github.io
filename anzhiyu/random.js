var posts=["undefined/create-your-own-comic-style-avatar/","undefined/iphone17-pro-camera-upgrade/","undefined/midjourney-gundam-coloring-book/","undefined/midjourney-ukiyo-e-anime/","undefined/midjourney-dragon-ball-avatar/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };