<?php
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Kullanıcı adı ve şifre alanının boş geçilmemesi kontrolü
    if (empty($username) || empty($password)) {
        header("Location: C:\Users\ruvi-\OneDrive\Masaüstü\web projem\giriş.php");
        exit;
    }

    // Kullanıcı adının mail adresi olup olmadığının kontrolü
    if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        header("Location: C:\Users\ruvi-\OneDrive\Masaüstü\web projem\giriş.php");
        exit;
    }

    // Kullanıcı bilgilerinin kontrolü
    $studentNumber = substr($username, 0, strpos($username, "@")); // Kullanıcı numarasını al
    $correctPassword = $studentNumber; // Doğru şifreyi oluştur (örneğin: b1812100001)

    if ($password === $correctPassword) {
        echo "Hoşgeldiniz $studentNumber";
    } else {
        header("Location: C:\Users\ruvi-\OneDrive\Masaüstü\web projem\giriş.php");
        exit;
    }

?>
