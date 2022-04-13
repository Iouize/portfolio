<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Portfolio de Louise Delauney</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/c57da2c7d3.js" crossorigin="anonymous"></script>
</head>
<body>
    <section class="contact">
        <header>
            <a href="index.html"><i class="fas fa-home"></i></a>
        </header>
        <main>
            <h1>Contact</h1>
            <form method="post">
                <input type="text" id="nom" name = "nom" placeholder="Nom">
                <input type="email" id="mail" name = "mail" required placeholder="Adresse mail">
                <input type="text" id="objet" name = "objet" placeholder="Objet">
                <textarea name="message" id="message" required></textarea>
                <button type="submit">Envoyer</button>
            </form>

            <?php 
                if (isset($_POST['message'])) {
                    $entete  = 'MIME-Version: 1.0' . "\r\n";
                    $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
                    $entete .= 'From: info@louise.cool' . "\r\n";
                    $entete .= 'Reply-to: ' . $_POST['mail'];

                    $message = '<h1>Message envoyé depuis la page Contact de louise.cool</h1>
                    <p><b>Email : </b>' . $_POST['mail'] . '<br>
                    <b>Objet : ' .$_POST['objet'] . '</b><br>
                    <b>Message : </b>' . htmlspecialchars($_POST['message']) . '</p>';

                    $retour = mail('louisedelauney@gmail.com', 'Envoi depuis page contact', $message, $entete);
                    if($retour)
                        echo '<p>Votre message a bien été envoyé.</p>';
                }
            
            ?>
        </main>  
    </section>
    <script src="script.js"></script>
</body>
</html>