import config from '../config';


export const projectMixins = {
  data() {
    return {};
  },
  computed: {},
  mounted() {
  },
  methods: {
    getConfig() {
      return config;
    },
    xss(value) {
      return value;
    },
  },
};
