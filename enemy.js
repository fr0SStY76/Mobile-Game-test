var xtra = level;
function Enemy(){
    if ((p1.isTouching(e1) || p1.isTouching(e2) || p1.isTouching(e3) || p1.isTouching(e4) || p1.isTouching(be) || p1.isTouching(se1) || p1.isTouching(se2))){
        lives = lives - 1;
        p1.x += -50;
        p1.y += -50;
        if (lives < 0){
            room = 0;
            gs = 0;
            l1.stop();
            l2.stop();
            l3.stop();
            bsl.stop();
        }
    }
    if (level > 50){
        xtra = 45;
    }
    if (lives >= 5){
        h1.shapeColor = "red"
        h2.shapeColor = "red"
        h3.shapeColor = "red"
        h4.shapeColor = "red"
        h5.shapeColor = "red"
    }
    if (lives === 4){
        h1.shapeColor = "red"
        h2.shapeColor = "red"
        h3.shapeColor = "red"
        h4.shapeColor = "red"
        h5.shapeColor = "black"
    }
    if (lives === 3){
        h1.shapeColor = "red"
        h2.shapeColor = "red"
        h3.shapeColor = "red"
        h4.shapeColor = "black"
        h5.shapeColor = "black"
    }
    if (lives === 2){
        h1.shapeColor = "red"
        h2.shapeColor = "red"
        h3.shapeColor = "black"
        h4.shapeColor = "black"
        h5.shapeColor = "black"
    }
    if (lives === 1){
        h1.shapeColor = "red"
        h2.shapeColor = "black"
        h3.shapeColor = "black"
        h4.shapeColor = "black"
        h5.shapeColor = "black"
    }
    if (lives === 0){
        h1.shapeColor = "black"
        h2.shapeColor = "black"
        h3.shapeColor = "black"
        h4.shapeColor = "black"
        h5.shapeColor = "black"
    }


    //Enemy Die
    if (e1.isTouching(atkbox)){
        e1.x = -2000;
        e1.y = -2000;
        xp += 50 - xtra;
    }
    if (e2.isTouching(atkbox)){
        e2.x = -2000;
        e2.y = -2000;
        xp += 50 - xtra;
    }
    if (e3.isTouching(atkbox)){
        e3.x = -2000;
        e3.y = -2000;
        xp += 50 - xtra;
    }
    if (e4.isTouching(atkbox)){
        e4.x = -2000;
        e4.y = -2000;
        xp += 50 - xtra;
    }
    if (be.isTouching(atkbox)){
        be.x = -2000;
        be.y = -2000;
        xp += 100 - xtra;
    }
    if (se1.isTouching(atkbox)){
        se1.x = -2000;
        se1.y = -2000;
        xp += 75 - xtra;
    }
    if (se2.isTouching(atkbox)){
        se2.x = -2000;
        se2.y = -2000;
        xp += 75 - xtra;
    }
    if (xp >= 200){
        xp = xp - 200;
        level += 1;
        lives += 0.25;
        splay = 'yes';
        l1.stop();
        l2.stop();
        l3.stop();
        bsl.stop();
        if (frameCount % 240 === 0){
            if (splay === 'yes'){
                var i = round(random(1,3));
                if (i === 1){
                    l1.play();
                }else if (i === 2){
                    l2.play();
                }else{
                    l3.play();
                }
                splay = 'no'
            }
        }
    }



        if (bss.isTouching(atkbox)){
            if (bosslife < 0){
                bss.x = -2000;
                bss.y = -2000;
                level += 5;
            }else{
                bosslife += -1;
                bss.x += 100
                bss.y += 100
                p1.x += -50
                p1.y += -50
            }
        }
        if (p1.isTouching(bss)){
            lives = lives - 1;
            p1.x += -50;
            p1.y += -50;
            if (lives < 0){
                room = 0;
                gs = 0;
                l1.stop();
                l2.stop();
                l3.stop();
                bsl.stop();
            }
        }
    if (room === 1 || room === 6 || room === 9){
    bh1.visible = true;
    bh2.visible = true;
    bh3.visible = true;
    bh4.visible = true;
    bh5.visible = true;
    bh6.visible = true;
    bh7.visible = true;
    if (bosslife >= 14){
        bh1.shapeColor = "purple";
        bh2.shapeColor = "purple";
        bh3.shapeColor = "purple";
        bh4.shapeColor = "purple";
        bh5.shapeColor = "purple";
        bh6.shapeColor = "purple";
        bh7.shapeColor = "purple";
    }
    if (bosslife === 12){
        bh1.shapeColor = "purple";
        bh2.shapeColor = "purple";
        bh3.shapeColor = "purple";
        bh4.shapeColor = "purple";
        bh5.shapeColor = "purple";
        bh6.shapeColor = "purple";
        bh7.shapeColor = "black";
    }
    if (bosslife === 10){
        bh1.shapeColor = "purple";
        bh2.shapeColor = "purple";
        bh3.shapeColor = "purple";
        bh4.shapeColor = "purple";
        bh5.shapeColor = "purple";
        bh6.shapeColor = "black";
        bh7.shapeColor = "black";
    }
    if (bosslife === 8){
        bh1.shapeColor = "purple";
        bh2.shapeColor = "purple";
        bh3.shapeColor = "purple";
        bh4.shapeColor = "purple";
        bh5.shapeColor = "black";
        bh6.shapeColor = "black";
        bh7.shapeColor = "black";
    }
    if (bosslife === 6){
        bh1.shapeColor = "purple";
        bh2.shapeColor = "purple";
        bh3.shapeColor = "purple";
        bh4.shapeColor = "black";
        bh5.shapeColor = "black";
        bh6.shapeColor = "black";
        bh7.shapeColor = "black";
    }
    if (bosslife === 4){
        bh1.shapeColor = "purple";
        bh2.shapeColor = "purple";
        bh3.shapeColor = "black";
        bh4.shapeColor = "black";
        bh5.shapeColor = "black";
        bh6.shapeColor = "black";
        bh7.shapeColor = "black";
    }
    if (bosslife === 2){
        bh1.shapeColor = "purple";
        bh2.shapeColor = "black";
        bh3.shapeColor = "black";
        bh4.shapeColor = "black";
        bh5.shapeColor = "black";
        bh6.shapeColor = "black";
        bh7.shapeColor = "black";
    }
    if (bosslife === 0){
        bh1.shapeColor = "black";
        bh2.shapeColor = "black";
        bh3.shapeColor = "black";
        bh4.shapeColor = "black";
        bh5.shapeColor = "black";
        bh6.shapeColor = "black";
        bh7.shapeColor = "black";

        room = 1;
    }
    }else{
    bh1.visible = false;
    bh2.visible = false;
    bh3.visible = false;
    bh4.visible = false;
    bh5.visible = false;
    bh6.visible = false;
    bh7.visible = false;
}

}
