// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import FullPageScroll from "./modules/full-page-scroll";
import load from "./modules/load.js";
import Wrap from "./modules/wrap.js";

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
load();

const fullPageScroll = new FullPageScroll();
const animationIntroTitle = new Wrap({elementSelector: `.intro__title`});
const animationDate = new Wrap({elementSelector: `.intro__date`, delay: 700});
const animationStoryTitle = new Wrap({
  elementSelector: `.slider__item-title`,
});
const animationPrizesTitle = new Wrap({elementSelector: `.prizes__title`});

fullPageScroll.init();
animationIntroTitle.init();
animationDate.init();
animationStoryTitle.init();
animationPrizesTitle.init();
