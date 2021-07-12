<?php
    //echo $_POST['A'];
?>

<main>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/jogo.css">

    <div class="container-jogo">
        <form class="formulario">
                
            <div class="div-textarea">

                <textarea id="inpText" readonly cols="auto" rows="auto" scroll=no></textarea>

            </div>	

            <div class="div_op">
                <div id="divOpcA" class="opcs">
                    <div class="rad">
                        <input type="radio" id="rad1" name="N" onclick="qst(1)">
                    </div>

                    <div class="f">
                        <label for="rad1"><p class="qstt" id="qst1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi aperiam officia vero, vel repellendus quas! Corrupti pariatur temporibus corporis facere et eos? Blanditiis veniam exercitationem architecto voluptas fugiat aperiam!</p></label>
                    </div>
                </div>

                <div id="divOpcB" class="opcs">
                    <div class="rad">
                        <input type="radio" id="rad2" name="N" onclick="qst(2)">
                    </div>

                    <div class="f">
                        <label for="rad2"><p class="qstt" id="qst2">Teste</p></label>
                    </div>
                </div>

                <div id="divOpcC" class="opcs">
                    <div class="rad">
                        <input type="radio" id="rad3" name="N" onclick="qst(3)">
                    </div>

                    <div class="f">
                        <label for="rad3"><p class="qstt" id="qst3">Teste</p></label>
                    </div>
                </div>

                <div id="divOpcD" class="opcs">
                    <div class="rad">
                        <input type="radio" id="rad4" name="N" onclick="qst(4)">
                    </div>

                    <div class="f">
                        <label for="rad4"><p class="qstt" id="qst4">Teste</p></label>
                    </div>
                </div>

                <div id="divOpcE" class="opcs">
                    <div class="rad">
                        <input type="radio" id="rad5" name="N" onclick="qst(5)">
                    </div>

                    <div class="f">
                        <label for="rad5"><p class="qstt" id="qst5">Teste</p></label>
                    </div>
                </div>

            </div>
                 
            <div class="div-submit">
                <input type="submit" value="Enviar" Class="submit">
            </div>
        </form>
    </div>
</main>