$(document).ready(function () {
  // search
  $("#job-search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".jobs-card > div  ").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // filter
  $("#main-select").on("change", function () {
    // $("#cities").empty();
    // $("#compaines").empty();

    if ($("#main-select").val() == "cities")
      $("#cities")
        .append("<option>Sana'a</option><option>Aden</option>")
        .fadeIn(2000);
    else
      $("#companies")
        .append("<option>United Nations</option><option>DU Monde</option>")
        .fadeIn(2000);
  });
  $("#filter-btn").click(function () {
    $("#cities").empty();
    $("#companies").empty();
  });
  $("body").css("text-align", "left");

  // language
  $(".language-select").on("change", function () {
    if ($(".language-select").val() == "en") {
      $("body").css("text-align", "left");
      $("body").css("direction", "ltr");
    } else if ($(".language-select").val() == "ar") {
      $("body").css("text-align", "right");
      $("body").css("direction", "rtl");
    }
  });

  // input skills
  //   $(".modal-footer button").click(function () {
  //     var usersCity = $(
  //       "#addSkill > div > div > div.modal-body > form > input"
  //     ).val();
  //     console.log(usersCity);
  //     // $("body").html("I'm in " + usersCity + "!");
  //     $(
  //       ".skills"
  //     ).append(`<span class="p-2 py-1 mx-1 mb-2 d-inline-flex  rounded-pill bg-primary text-white">
  //      ${usersCity}
  //     <i class="bi bi-x" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
  // </span>`);
  //   });

  // input experince
  $("#experience .modal-footer button").click(function () {
    var experinceTitle = $("#experinceTitle").val();
    var experinceCity = $("#experinceCity").val();
    var experinceJob = $("#experinceJob").val();
    var experinceDescription = $("#experinceDescription").val();
    console.log(experinceTitle);
    // $("body").html("I'm in " + usersCity + "!");
    $("#experience-body").append(`  <div class="row my-3 experience-card">

    <div class=" shadow-sm mx-auto py-3 bg-white col-10 ">
        <div class="d-flex justify-content-between align-items-center px-md-2">
            <div class="col-10" >
                <p class="h5 text-primary">${experinceTitle}</p>
                <p class="text-black country p-0 m-0"> <span class="fw-bold">City : </span>
                   ${experinceCity}</p>
                <p class="text-black the-role m-0"><span class="fw-bold ">Role : </span>${experinceJob}</p>

                <p class="text-black">${experinceDescription}</p>
            </div>
            <div class="col-2 align-self-start">
                <i class="bi bi-trash text-primary h5 mx-1  trash" style="cursor: pointer;" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"></i>
                <i class="bi bi-pencil-square text-primary h5  mx-1 modify" style="cursor: pointer;"></i>

            </div>
        </div>
    </div>
</div>`);
  });

  // experince

  $("#experience-body > div").each(function (t) {
    console.log(t);
    $(this).on("click", function () {
      $(this).remove();
    });
  });
  // skills

  // $(".skills > span").each(function (t) {
  //   console.log(t);
  //   $(this).on("click", function () {
  //     $(this).remove();
  //   });
  // });

  // qualification
  // $(".qualification > div").each(function (t) {
  //   console.log(t);
  //   $(this).on("click", function () {
  //     $(this).remove();
  //   });
  // });

  // console.log('fffffffffffffffffffffffffffffffff')
  // console.log($("#qualification-form"));
  // $("#qualification-form" ).input.value="";

  $("#cv").click(function (e) {
    e.preventDefault();
    window.location.href = "../shatha adel ali .pdf";
  });
});
