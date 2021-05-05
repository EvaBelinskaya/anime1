import bg_summerUrl from "../resources/bg_summer.jpg";
import bg_winterUrl from "../resources/bg_winter.png";
import bg_autumnUrl from "../resources/bg_autumn.png";
import bg_springUrl from "../resources/bg_spring.jpg"; //background
import cloudsUrl from "../resources/clouds.png";
import clouds_winterUrl from "../resources/clouds_winter.png";
import clouds_autumnUrl from "../resources/clouds_autumn.png";//clouds
import treesUrl from "../resources/trees.png";
import trees_autumnUrl from "../resources/trees_autumn.png";
import trees_winterUrl from "../resources/trees_winter.png";//trees
import plantsUrl from "../resources/plants.png";
import snow_winterUrl from "../resources/snow_winter.png";
import sun_flare_summerUrl from "../resources/sun_flare_summer.png";

const seasons = {
  Spring: {
    backGround:bg_springUrl,
    clouds:cloudsUrl,
    plants:plantsUrl,
    trees:treesUrl
  },
  Winter:{
    backGround:bg_winterUrl,
    clouds:clouds_winterUrl,
    plants:plantsUrl,
    trees:trees_winterUrl,
    snow:snow_winterUrl
  },
  Summer:{
    backGround:bg_summerUrl,
    clouds:cloudsUrl,
    sunFlare:sun_flare_summerUrl,
    plants:plantsUrl,
    trees:treesUrl,
  },
  Autumn:{
    backGround:bg_autumnUrl,
    clouds:clouds_autumnUrl,
    plants:plantsUrl,
    trees:trees_autumnUrl
  }
};


export const getSeasonTextures = (season) => seasons[season];


