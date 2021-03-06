// eslint-disable-next-line import/no-commonjs
const path = require("path");

const config = {
  projectName: "OurGas",
  date: "2020-12-29",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: "react",
  alias: {
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/asset": path.resolve(__dirname, "..", "src/asset"),
    "@/api": path.resolve(__dirname, "..", "src/api")
  },
  defineConstants: {
    LOCATION_APIKEY: JSON.stringify("PLSBZ-272HR-LXUWZ-W5Q4K-XXLXE-LWF66")
  },

  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  }
};

export default function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
}
