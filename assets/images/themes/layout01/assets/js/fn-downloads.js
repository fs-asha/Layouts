$(function() {
    $("body").LoadingOverlay("show", {
	    fade  : [1000, 700]
	});
    $("html, body").animate({ scrollTop: 0 }, "slow");
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
    setTimeout(function() {
        downloadnow();
    }, 500);
});

function downloadnow(){
    setTimeout(function() {
        downloadExport();
    }, 1200);
}

function downloadExport()
{
  var svgElements = $("#print-area").find('svg');

  //replace all svgs with a temp canvas
  svgElements.each(function() {
    var canvas, xml;

    canvas = document.createElement("canvas");
    canvas.className = "screenShotTempCanvas";
    //convert SVG into a XML string
    xml = (new XMLSerializer()).serializeToString(this);

    // Removing the name space as IE throws an error
    xml = xml.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/, '');

    //draw the SVG onto a canvas
    canvg(canvas, xml);
    $(canvas).insertAfter(this);
    //hide the SVG element
    ////this.className = "tempHide";
    $(this).attr('class', 'tempHide');
    $(this).hide();
  });

  var doc = new jsPDF('p', 'pt', 'a4'); //new jsPDF('p', 'mm', [210, 297]);
  doc.internal.scaleFactor = 3.60; //Adjust scaling to fit default 3.75
  var position = 0;
    var pdfname = 'Profile-'+ Date.now();
    // var pdfname = 'Profile-0';
    var element = $('#print-area')[0];
    var w = element.clientWidth;
    var h = element.clientHeight;
    var newCanvas = document.createElement('canvas');
    newCanvas.width = w * 2; 
    newCanvas.height = h * 2;
    newCanvas.style.width = w + 'px';
    newCanvas.style.height = h + 'px';
    var context = newCanvas.getContext('2d');
    context.scale(1.93, 1.97);

    doc.addHTML(element, {pagesplit: true, canvas: newCanvas, background: '#ffffff', margin: {
    top: 0, bottom: 0, left: 0, right: 0}}, function () {
        doc.save(pdfname+'.pdf');
        if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
        {
            setTimeout(function() {
                $("body").LoadingOverlay("hide");
                var closeBtn = 'Close this window';
                var strCB = '<div class="page-content page-content-ease-in"><div class="row"><div class="col-lg-12"><div class="page-title">';
                strCB +='<button onclick=\"colseThis();\" class=\"btn btn-primary mb-10\">'+closeBtn+' <i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>';
                strCB +='</div></div></div>';

                $('#print-area').html(strCB);
            }, 7000);         
        } else {
            setTimeout(function() {
                $("body").LoadingOverlay("hide");
                window.history.back();
            }, 1500);
        }
    });

  $("#print-area").find('.screenShotTempCanvas').remove();
  $("#print-area").find('.tempHide').show().removeClass('tempHide');
  
} //End download

