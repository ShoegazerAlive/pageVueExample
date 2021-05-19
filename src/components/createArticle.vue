<template src="./CreateArticle.html"></template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Global from "../Global";
import axios from "axios";
import Article from "../models/Article";
import { required } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import swal from "sweetalert";

export default {
  name: "CreateArticle",
  components: {
    Slider,
    Sidebar,
  },
  data() {
    return {
      v$: useValidate(),
      url: Global.url,
      article: new Article("", "", "", ""),
      submitted: false,
      file: "",
      isEdit: true
    };
  },
  validations() {
    return {
      article: {
        title: { required },
        content: { required },
      },
    };
  },
  mounted() {},
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    save() {
      this.v$.$validate();

      if (!this.v$.error) {
        axios.post(this.url + "save/", this.article).then((res) => {
          if (res.data.status == "success") {
            if (
              this.file != null &&
              this.file != undefined &&
              this.file != ""
            ) {
              const formData = new FormData();
              formData.append("file0", this.file, this.file.name);

              let articleId = res.data.article._id;

                axios
                .post(this.url + "upload-image/" + articleId, formData)
                .then((res) => {
                if (res.data.article) {
                    swal(
                      "Artículo creado", // El primer parámetro es el título
                      "El artículo ha sido creado", // El segundo parámetro es el subtítulo
                    "success"
                    );
                    this.article = res.data.article;
                    this.$router.push("/blog");
                    } else {
                    swal(
                      "El artículo no se creó", // El primer parámetro es el título
                      "Algo sucedió. El artículo no ha sido creado", // El segundo parámetro es el subtítulo
                    "error"
                    );
                }
                })
                .catch((error) => {});
            } else {
              swal(
                "Artículo creado", // El primer parámetro es el título
                "El artículo ha sido creado", // El segundo parámetro es el subtítulo
                "success"
              );
              this.article = res.data.article;
              this.$router.push("/blog");
            }
          }
        });
      } else {
        console.log(this.$error);
      }
    },
  },
};
</script>
