<!DOCTYPE html>
<html>
<head>
  <title>İletişim Formu Sonuçları</title>
</head>
<body>
  <h1>İletişim Formu Sonuçları</h1>
  <p>İşte gönderilen form bilgileri:</p>

  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $konu = $_POST["konu"];
    $message = $_POST["message"];
    $cinsiyet= $_POST["cinsiyet"];
   

    echo "<p><strong>Ad:</strong> $name</p>";  
    echo "<p><strong>E-posta:</strong> $email</p>";   
    echo "<p><strong>Cinsiyet:</strong> $cinsiyet</p>";
    echo "<p><strong>Konu:</strong> $konu</p>";
    echo "<p><strong>Mesaj:</strong> $message</p>";

  }
  ?>

</body>
</html>
