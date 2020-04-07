$(document).ready(function() {
    console.log("java working")
  $(document).on("click", ".submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/update/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      // history.go(0)
      window.location.reload(data)

    });

  });
});
