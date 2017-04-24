var nav = (function(){
    var initmodule,
        onmouseover_s,
        onmouseout_s,
        $which_ev,
        returnfunc;

    onmouseover_s = function($which_ev){
        $which_ev.next().stop().show(1000).addClass("show");
        $which_ev.closest("li").siblings().find(".show").removeClass("show").stop().hide();
        return false;
    }

    onmouseout_s = function($which_ev){
        $which_ev.next().stop().hide(1000).removeClass("show");
        $which_ev.closest("li").siblings().find(".show").removeClass("show").stop().hide();
        return false;
    }

    initmodule = function($which_ev){
        // $which_ev.mouseover(function(){
        //     returnfunc = onmouseover_s($which_ev);
        // });

        // $which_ev.mouseout(function(){
        //     returnfunc = onmouseout_s($which_ev);
        // });
        return {mouseover:onmouseover_s,mouseout:onmouseout_s}
    }

    return {
        initmodule:initmodule
    }
}(jQuery))
