(function($) {

    // body..
    $.fn.cntl = function( options ) {
        console.log('im Immmmm');
        console.log(options);
        /* default settings */
        var settings = $.extend({
            revealbefore : 200, /* this is the amount of "scroll padding" to allow (the more, the later the state will be revealed) */
            anim_class  : 'cntl-animate', /* the anim class, this class should have animation rules in css */
            onreveal    : null /* a callback once the state has been revealed */
        }, options);




        return this.each( function() {
            console.log('ium in each');
            var statelist = $(this).find('.cntl-state');
            console.log(statelist);
            var bar_fill = $(this).find('.cntl-bar-fill');
            console.log(bar_fill);
            var states = [];
            var tbf = 0;

            function revealElements( )
            {
                console.log('im reavealing !!');
                var windowtop = $(window).scrollTop();
                var windowbtm = windowtop + $(window).height();
                // console.log(windowtop);
                // console.log(windowbtm);
                console.log(states);
                if(states.length === 0){
                    setupElements();
                }
                for( var i = 0; i < states.length; i++) {

                    if( states[i].top > windowtop && states[i].top < windowbtm )
                    {
                        if ( 
                            !states[i].elm.hasClass( settings.anim_class ) && 
                            $.isFunction( settings.onreveal ) )
                        {
                            settings.onreveal.call( this, states[i].elm );
                        }

                        states[i].elm.addClass( settings.anim_class );
                        var h = states[i].elm.position().top;

                        if( h > tbf )
                        {
                            tbf = h;
                        }
                        bar_fill.height( tbf );

                    }
                };

            }
            function setupElements( )
            {

                for (var i = 0; i < statelist.length; i++) {

                    states[i] = {};
                    states[i]['top'] = $(statelist[i]).offset().top + settings.revealbefore;
                    states[i]['elm'] = $(statelist[i]);

                };


                revealElements();

            }

            

            $(window).on('scroll',revealElements);
            $(window).on('load',setupElements)

        });
    }

}(jQuery));
