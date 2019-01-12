TweenMax.from(".banner-container, .label1, .phone-label, .logo", 0.7, {opacity:0, ease:Power2.easeOut});
TweenMax.staggerFrom(".label2, .label3, .label4", 0.5, {opacity:0, delay:1}, 0.5);
TweenMax.staggerTo(".label2, .label3, .label4", 0.2,{delay:4, scale:1.1, repeat:1, yoyo:true}, 0.5);
TweenMax.from(".button-label", 0.5, {opacity:0, delay:6, ease:Power2.easeOut});
TweenMax.to(".arrow-label", 0.2, {delay:7, x:101, repeat:9, yoyo:true});