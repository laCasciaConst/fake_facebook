// VARIABLES GLOBALES

// DOM READY
$(document).ready(function () {
  console.log("ready");

  ("use strict");

  let input_Profile_Name = "Sad Mia";
  let input_Profile_Image = "images/profile/profile.webp";

  let input_profile_link = "https://facebook.com/sadmia.page";

  let input_video_1 = "video/Facebook-Post.mp4";

  let Input_firnd_1 = "images/posts/profile-1.webp";
  let Input_firnd_2 = "images/posts/profile-2.webp";
  let Input_firnd_3 = "images/posts/profile-3.webp";
  let Input_firnd_4 = "images/posts/profile-4.webp";
  let Input_firnd_5 = "images/posts/profile-5.webp";
  let Input_firnd_6 = "images/posts/profile-6.webp";
  let Input_firnd_7 = "images/posts/profile-7.webp";
  let Input_firnd_8 = "images/posts/profile-8.webp";
  let Input_firnd_9 = "images/posts/profile-9.webp";

  let Input_post_img_1 = "images/post/1.webp";
  let Input_post_img_2 = "images/post/2.webp";
  let Input_post_img_3 = "images/post/3.webp";
  let Input_post_img_4 = "images/post/4.webp";
  let Input_post_img_5 = "images/post/5.webp";
  let Input_post_img_6 = "images/post/6.webp";
  let Input_post_img_7 = "images/post/7.webp";
  let Input_post_img_8 = "images/post/8.webp";
  let Input_post_img_9 = "images/post/9.webp";
  let Input_post_img_10 = "images/post/10.webp";
  let Input_post_img_11 = "images/post/11.webp";
  let Input_post_img_12 = "images/post/12.webp";

  let profile_images = $("#Profile_images");
  let profile_name = $("#profile_name");
  let profile_link = $("#profile-link");

  profile_images.each(function () {
    $(this).attr("src", input_Profile_Image);
  });

  profile_link.each(function () {
    $(this).attr("href", input_profile_link);
  });

  profile_name.each(function () {
    $(this).text(input_Profile_Name);
  });

  $(".lcs-btn_i").on("click", function () {
    $("#post-icon-btn_i").toggleClass("fas like-controle");
    $("#post-icon-text_i").text("Like").toggleClass("like-controle");
  });

  $(".lcs-btn_v").on("click", function () {
    $("#post-icon-btn_v").toggleClass("fas like-controle");
    $("#post-icon-text_v").text("Like").toggleClass("like-controle");
  });

  $(".lcs-btn_t").on("click", function () {
    $("#post-icon-btn_t").toggleClass("fas like-controle");
    $("#post-icon-text_t").text("Like").toggleClass("like-controle");
  });

  $(".lcs-btn_bt").on("click", function () {
    $("#post-icon-btn_bt").toggleClass("fas like-controle");
    $("#post-icon-text_bt").text("Like").toggleClass("like-controle");
  });

  $(".lcs-btn_2i").on("click", function () {
    $("#post-icon-btn_2i").toggleClass("fas like-controle");
    $("#post-icon-text_2i").text("Like").toggleClass("like-controle");
  });

  $(".lcs-btn_3i").on("click", function () {
    $("#post-icon-btn_3i").toggleClass("fas like-controle");
    $("#post-icon-text_3i").text("Like").toggleClass("like-controle");
  });

  $(".lcs-btn_4i").on("click", function () {
    $("#post-icon-btn_4i").toggleClass("fas like-controle");
    $("#post-icon-text_4i").text("Like").toggleClass("like-controle");
  });

  $(".lcs-btn_plus_i").on("click", function () {
    $("#post-icon-btn_plus_i").toggleClass("fas like-controle");
    $("#post-icon-text_plus_i").text("Like").toggleClass("like-controle");
  });

  $("#public-btn-i").on("click", function () {
    $(".Select-audience, .popop-background").toggleClass("dis_block");
  });

  $("#popup-close-btn").on("click", function () {
    $(".Select-audience, .popop-background").removeClass("dis_block");
  });

  $(".popop-background").on("click", function () {
    $(".Select-audience, .popop-background").removeClass("dis_block");
  });

  $("#public-btn").on("click", function () {
    $("#public-btn").addClass("activ-li-div");
    $("#friends-btn, #lock-btn").removeClass("activ-li-div");
    $("#public-li-icon").addClass("activ-li-icon fa-dot-circle");
    $("#friends-li-icon, #lock-li-icon").removeClass("activ-li-icon");
    $("#public-btn-i")
      .removeClass("fa-lock fa-user-friends")
      .addClass("fa-globe-europe");
    $(".Select-audience, .popop-background").removeClass("dis_block");
  });

  $("#friends-btn").on("click", function () {
    $("#friends-btn").addClass("activ-li-div");
    $("#public-btn, #lock-btn").removeClass("activ-li-div");
    $("#friends-li-icon")
      .addClass("activ-li-icon fa-dot-circle")
      .removeClass("fa-circle");
    $("#public-li-icon, #lock-li-icon").removeClass(
      "activ-li-icon fa-dot-circle"
    );
    $("#public-btn-i")
      .removeClass("fa-lock fa-globe-europe")
      .addClass("fa-user-friends");
    $(".Select-audience, .popop-background").removeClass("dis_block");
  });

  $("#lock-btn").on("click", function () {
    $("#lock-btn").addClass("activ-li-div");
    $("#public-btn, #friends-btn").removeClass("activ-li-div");
    $("#lock-li-icon")
      .addClass("activ-li-icon fa-dot-circle")
      .removeClass("fa-circle");
    $("#public-li-icon, #friends-li-icon").removeClass(
      "activ-li-icon fa-dot-circle"
    );
    $("#public-btn-i")
      .removeClass("fa-globe-europe fa-user-friends")
      .addClass("fa-lock");
    $(".Select-audience, .popop-background").removeClass("dis_block");
  });

  $("#thim-button").on("click", function () {
    $(".thim-div").toggleClass("click-btn-td");
    $("#thim-button").toggleClass("fa-caret-left fa-caret-right");
  });

  // 배경 및 텍스트 색상 관련 부분
  $(".bg-color").on("click", function () {
    let color = $(this).data("color");
    $(".post-section, .profile-section, .full-navbar").attr(
      "class",
      `post-section bg-color-${color}`
    );
    $(".cover-image-section").attr(
      "class",
      `cover-image-section cover-background-${color}`
    );
  });

  $(".txt-color").on("click", function () {
    let color = $(this).data("color");
    $(".pro-txt, .fir-count-txt, .txt-cc").attr(
      "class",
      `pro-txt text-color-${color}`
    );
    $(".activ-navbar").removeClass(`text-color-${color}`);
  });

  // 친구, 포스트 이미지 처리
  const updateImages = (elements, inputImage) => {
    elements.each(function () {
      $(this).attr("src", inputImage);
    });
  };

  updateImages($("#frind-image-1"), Input_firnd_1);
  updateImages($("#frind-image-2"), Input_firnd_2);
  updateImages($("#frind-image-3"), Input_firnd_3);
  updateImages($("#frind-image-4"), Input_firnd_4);
  updateImages($("#frind-image-5"), Input_firnd_5);
  updateImages($("#frind-image-6"), Input_firnd_6);
  updateImages($("#frind-image-7"), Input_firnd_7);
  updateImages($("#frind-image-8"), Input_firnd_8);
  updateImages($("#frind-image-9"), Input_firnd_9);

  updateImages($("#post-image-1"), Input_post_img_1);
  updateImages($("#post-image-2"), Input_post_img_2);
  updateImages($("#post-image-3"), Input_post_img_3);
  updateImages($("#post-image-4"), Input_post_img_4);
  updateImages($("#post-image-5"), Input_post_img_5);
  updateImages($("#post-image-6"), Input_post_img_6);
  updateImages($("#post-image-7"), Input_post_img_7);
  updateImages($("#post-image-8"), Input_post_img_8);
  updateImages($("#post-image-9"), Input_post_img_9);
  updateImages($("#post-image-10"), Input_post_img_10);
  updateImages($("#post-image-11"), Input_post_img_11);
  updateImages($("#post-image-12"), Input_post_img_12);

  let vidio_tge = $("#vidio-tge");
  let video_update = $("#video-update");

  vidio_tge.attr("src", input_video_1);
  video_update.attr("src", input_video_1);

  $("#bio-edit-btn").on("click", function () {
    $("#bio-text").addClass("bio-btn-click");
    $(".bio-btn-click").removeClass("bio-btn-click");

    let input_length = 101 - $(".input-box").val().length;
    $("#length-count")
      .text(input_length)
      .css(
        "color",
        input_length >= 30 ? "green" : input_length <= 6 ? "red" : "#C24641"
      );

    $(".input-box").on("input", function () {
      let input_length = 101 - $(this).val().length;
      $("#length-count")
        .text(input_length)
        .css(
          "color",
          input_length >= 30 ? "green" : input_length <= 6 ? "red" : "#C24641"
        );
    });
  });

  $("#cencel-btn").on("click", function () {
    $("#bio-text").removeClass("bio-btn-click");
    $(".bio-btn-click").addClass("bio-btn-click");
  });

  $("#save-btn").on("click", function () {
    $("#bio-text").removeClass("bio-btn-click");
    $(".bio-btn-click").addClass("bio-btn-click");
    $("#bio-text").text($(".input-box").val());
  });
});
