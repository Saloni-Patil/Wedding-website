
const color =[
    {
        name: 'pink',
        code:'#fb839e',
        url:'css/pink.css'
    },
    {
        name: 'light blue',
        code:'#3e99f4',
        url:'css/light-blue.css'
    },
    {
        name: 'light green',
        code:'#0dcebd',
        url:'css/light-green.css'
    },
    {
        name: 'red',
        code:'#cc3a3b',
        url:'css/red.css'
    },
    {
        name: 'yellow',
        code:'#ff9801',
        url:'css/yellow.css'
    }
    
]

$(document).ready(function(){
    setColors();
    function setColors(){
        for(let i=0; i<color.length; i++)
        {
            const span = document.createElement("span");
            span.style.backgroundColor = color[i].code;
            $(".colors").append(span);
        }
    }

    $(".colors span").click(function (){
        const index = $(this).index();
        console.log(color[index].name)
        $(".alternate-style").attr("href",color[index].url);
    })

    // theme dark & light
    $(".theme-mode").change(function()
    {
         console.log($(this).val())
         if($(this).val() === "light")
         {
             $("body").removeClass("dark")
         }
         else
         {
            $("body").addClass("dark")
         }
    })

    // TOGGLE SETTING
     $(".s-toggle-btn").click(function(){
         $(".setting").toggleClass("open");
     })

})