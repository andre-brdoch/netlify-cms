import Vue from 'vue';
import Cloudinary, { CldImage, CldTransformation } from 'cloudinary-vue';

Vue.use(Cloudinary, {
  configuration: { cloudName: 'kisi-kloud' },
  components: {
    CldImage,
    CldTransformation,
  },
});
