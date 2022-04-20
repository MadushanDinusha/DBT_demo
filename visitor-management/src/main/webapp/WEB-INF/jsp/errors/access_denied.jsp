<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Access denied</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
          id="bootstrap-css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.min.css">
</head>
<style>

    .acessDen {
        width: 500px;
        margin-top: 5%;
        margin-left: 35%;
    }

</style>
<body>
<div class="container">
    <img class="acessDen" src="<c:url value="/resources/images/accessdenied.png"/> ">
</div>
</body>
</html>