
function openNav() {
document.getElementById("mySidepanel").style.width = "250px";
document.getElementById("main_container").style.marginLeft = "280px";
document.getElementById("toggle_containers").style.display = "none";
document.getElementById("fold").style.marginLeft = "0px";
document.getElementById("topTriggers").style.paddingLeft = "10px";
document.getElementById("mena").style.stroke = "gray";
document.getElementById("menaIn").style.stroke = "gray";



}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
document.getElementById("main_container").style.marginLeft = "30px";
document.getElementById("toggle_containers").style.display = "flex";
document.getElementById("fold").style.marginLeft = "300px";
document.getElementById("topTriggers").style.paddingLeft = "300px";
document.getElementById("mena").style.stroke = "black";




}


    //hide sidebars 
    document.getElementById("main_container2").style.width = "0";
    document.getElementById("sida").style.stroke = "black";

    function openNav2() {
        console.log("tryhing")
        document.getElementById("sida").style.stroke = "gray";
        document.getElementById("fold").style.marginRight = "400px";

        if(document.getElementById("main_container2").style.width == `400px`){
            console.log("is closed")

            document.getElementById("main_container2").style.width = `0`;
        } else {
            console.log("is open?")
            document.getElementById("main_container2").style.width = `400px`
        }
        // document.getElementById("main_container").style.width =  `${window.screen.availWidth - 400}px`;
    }

    /* Set the width of the sidebar to 0 (hide it) */
    function closeNav2() {
        document.getElementById("fold").style.marginRight = "10px";

        document.getElementById("main_container2").style.width = "0";
        document.getElementById("fold").style.marginRight = "0";

        document.getElementById("main_container").style.width =  `-webkit-fill-available`;
        document.getElementById("sida").style.stroke = "black";



    }



var globalWhere = $("#from").text()

var qrc = new QRCode(document.getElementById("qrcode"), {
    text: `www.enthnotes.com/notes/${globalWhere}`,
    colorDark : "#000000",
    colorLight : "#f9fafb",
    correctLevel : QRCode.CorrectLevel.H
});

    function spza(where){
    console.log(where)
    console.log((where + "1"))
    setTimeout(() => {
        document.getElementsByClassName(where + "1").style.backgroundColor = "black"
        document.getElementsByClassName(where + "1").style.color = "white"
    
    
    }, 400);
    setTimeout(() => {
        document.getElementsByClassName(where + "1").style.backgroundColor = ""
        document.getElementsByClassName(where + "1").style.color = ""
    }, 900);
    
    }
    
    function spz(where){
    setTimeout(() => {
        document.getElementById(where + "1").style.filter = "invert(1)"
    
    }, 400);
    setTimeout(() => {
        document.getElementById(where + "1").style.filter = "invert(0)"
    
    }, 900);
    
    }
    $(document).ready(function() {
        $(".hiddena").hide();
        openNav()
        var globalWhere = $("#from").text()


        var k = "parent"
        called(k)


        
 

    })



    function chaseSideNotes(){
        var p = document.getElementsByClassName("pickUP")

     

        for (var i=0; i < p.length; i++) {
            console.log(p[i].textContent)
            sidebarsa.push(p[i].textContent)

        }
        return sidebarsa

    }
    
    
    $('.master').hover(
    function () {
    $('.master').css("width", "9em")
    $(".hiddena").fadeIn();
    }, 
    function () {
    $(".hiddena").fadeOut();
    $('.master').css("width", "fit-content")
    
    }
    );
    


function MediumButton(options) {
if (options.label === undefined || !/\S{1}/.test(options.label) ||
    options.start === undefined || !/\S{1}/.test(options.start) ||
    options.end === undefined || !/\S{1}/.test(options.end)) {

    if (options.label === undefined || !/\S{1}/.test(options.label) ||
        options.action === undefined || !/\S{1}/.test(options.action)) {
        console.error('[Custom-Button] You need to specify "label", "start" and "end" OR "label" and "action"')
        return
    }
}

options.start = (options.start === undefined) ? '' : options.start
options.end = (options.end === undefined) ? '' : options.end

var self = this
this.options = options
this.button = document.createElement('button')
this.button.className = 'medium-editor-action'
this.button.innerHTML = options.label
this.button.onclick = function() {
    // get current selectet text
    var html = getCurrentSelection()
    var sel = window.getSelection()
    var parent = sel.anchorNode.parentElement

    // modify content
    var mark = true
    if (options.start === undefined || html.indexOf(options.start) == -1 && html.indexOf(options.end) == -1) {

        if (options.action != undefined) html = options.action(html, true, parent)
        html = options.start + html + options.end

    } else { // clean old

        if (options.action != undefined) html = options.action(html, false, parent)
        html = String(html).split(options.start).join('')
        html = String(html).split(options.end).join('')

    }


    var range
    var fragment
        //Set new Content
    if (sel.getRangeAt && sel.rangeCount) {

        range = window.getSelection().getRangeAt(0)
        range.deleteContents()

        if (range.createContextualFragment) fragment = range.createContextualFragment(html)
        else {
            var div = document.createElement('div')

            div.innerHTML = html
            fragment = document.createDocumentFragment()
            while ((child = div.firstChild)) fragment.appendChild(child)

        }

        var firstInsertedNode = fragment.firstChild
        var lastInsertedNode = fragment.lastChild
        range.insertNode(fragment)

        if (firstInsertedNode) {
            range.setStartBefore(firstInsertedNode)
            range.setEndAfter(lastInsertedNode)
        }

        sel.removeAllRanges()
        sel.addRange(range)

    }

    self.base.checkContentChanged()

}

}

MediumButton.prototype.getButton = function() {
return this.button
}

MediumButton.prototype.checkState = function(node) {
var html = getCurrentSelection()

if (this.options.start != '' && html.indexOf(this.options.start) > -1 && html.indexOf(this.options.end) > -1) {
    this.button.classList.add('medium-editor-button-active')
} else {
    this.button.classList.remove('medium-editor-button-active')
}

}

function getCurrentSelection() {
var html = ''
var sel

    if (typeof window.getSelection != 'undefined') {
        sel = window.getSelection()
        if (sel.rangeCount) {
            var container = document.createElement('div')
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents())
            }
            html = container.innerHTML
        }
    } else if (typeof document.selection != 'undefined') {
        if (document.selection.type == 'Text') {
            html = document.selection.createRange().htmlText
        }
    }
    return html

}


// safe
if (typeof exports !== 'undefined') {
if (typeof module !== 'undefined' && module.exports) {
exports = module.exports = MediumButton
}
exports.MediumButton = MediumButton
}

function reduceHoldStrings(){
    var uni = [... new Set(holdStrings)]
    var cleaner = []
    uni.forEach(element => {
        if (element == null){

        } else if(element == undefined) {
            
        } else {
            cleaner.push(element)
        }
    });
    holdStrings = cleaner
    console.log(holdStrings, "unique strings")
}


    //safe 
 
    function updateSideUserNoteNew(name){
        var contento = document.getElementById(name).innerHTML
        console.log(name)
        io = name.replace(" ", "_")
        console.log(io, name, "inserting user note")
        
    }

    function updateSideUserNote(where){
        var contento = document.getElementById(where).innerHTML
        var train = $("#train").text()
        console.log(train, "updating user note")
    }


    var editor = new MediumEditor('.editable', {
        buttonLabels: 'fontawesome',
        extensions: {
            table: new MediumEditorTable(),
            'pop': new MediumButton({
            label: '✍️',
            action: function (html, mark, id ) {
                    var upandgoing = "vaseline"
                    var randInt4 =   Math.floor(Math.random()*90000) + 10000;
                    var randInt5 =   randInt4 + 1

                    var randInt2 =   Math.floor(Math.random()*90000) + 10000;
                    var randInt7 =   Math.floor(Math.random()*90000) + 10000;

                    var randInt9 =   Math.floor(Math.random()*90000) + 10000;
                    var randInt8 =   randInt9 - 1

                    var randInt3 =   randInt2 + 1


                
                        if(keywords.includes(html)){ 
                            console.log(data, html, "done")

                            var html_ = html.replace(" ", "_")
                                console.log(html_, "html_")
                            if (data.payload == false ){

                        $("#sidebar").prepend(`
                


            <div id="vaseline">
                <div id=${randInt8}  class="group relative overflow-hidden md:first:row-span-2 group flex flex-col border border-orange-50 dark:border-gray-900 px-3 pb-4 pt-6 2x:pt-10 rounded-xl bg-gradient-to-r from-orange-500/5 to-white dark:from-gray-850 dark:to-gray-950 dark:hover:from-gray-800 hover:shadow-alternate shadow-none transition-shadow"><div class="transform transition-transform group-hover:-translate-y-24 hidden group-first:block absolute w-[550px] h-16 md:h-24 rotate-45 bg-red-500/10 dark:bg-white/10 blur-3xl"></div>
                    <div class="font-semibold text-lg flex items-center mt-auto mb-2 relative">
                        <span class="group-hover:underline">${html}</span></div>


                        <div class="text-lg flex items-center" style="width: 100% !important;  text-transform: capitalize">
                        
                            <div class="mx-auto"></div>

                            <div class="" onclick="del(this.id)" id=${randInt9} style="">
                                <button type="button" class="tag tag-red px-3" data-dismiss-target="#alert-additional-content-1" aria-label="Close">
                                    Dismiss
                                </button>
                            </div>
                        </div>

                    <div class="font-normal text-smd text-gray-400 pr-4 relative">
                        
                        
                        
                        <div class="mt-2">
                            <div class="">
                                <div class="editable editables1 tabable" id=${html_} onkeyup="updateSideUserNoteNew(this.id)">...</div>
                            </div>
                        </div>
                        <div class="mt-auto pt-4 flex items-center text-xs text-gray-500">
                            <div class="mt-auto pt-4 items-center text-xs text-gray-500">
                                <div id="toast-simple" class="tag tag-yellow" role="alert">
                                    <span class="">User definition.</span>
                                </div>
                            </div>
                    
                        </div>
                            
                    </div>
                </div>
            </div>


                    `)
                            refireEditor()
            

                            $('.sidebar > div').on('keydown', function(e){
                            if(e.keyCode == 9){
                                e.preventDefault();
                                document.execCommand('insertHTML', false, '&#009');
                            }
                            }).css('white-space', 'pre-wrap');

                                } else {

                                    var thisContent = data.payload.content
                                    var html_ = html.replace(" ", "_")
                                    console.log(html_, "html_")
                                    $("#sidebar").prepend(`
                    


                    <div id=${randInt8}  class="group relative overflow-hidden md:first:row-span-2 group flex flex-col border border-orange-50 dark:border-gray-900 px-3 pb-4 pt-6 2x:pt-10 rounded-xl bg-gradient-to-r from-orange-500/5 to-white dark:from-gray-850 dark:to-gray-950 dark:hover:from-gray-800 hover:shadow-alternate shadow-none transition-shadow"><div class="transform transition-transform group-hover:-translate-y-24 hidden group-first:block absolute w-[550px] h-16 md:h-24 rotate-45 bg-red-500/10 dark:bg-white/10 blur-3xl"></div>
                        <div class="font-semibold text-lg flex items-center mt-auto mb-2 relative"> 
                            <span class="group-hover:underline">${html}</span></div>


                            <div class="text-lg flex items-center" style="width: 100% !important;  text-transform: capitalize">
                            
                                <div class="mx-auto"></div>

                                <div class="" onclick="del(this.id)" id=${randInt9} style="">
                                    <button type="button" class="tag tag-red px-3" data-dismiss-target="#alert-additional-content-1" aria-label="Close">
                                        Dismiss
                                    </button>
                                </div>
                            </div>

                        <div class="font-normal text-smd text-gray-400 pr-4 relative">
                            
                            
                            
                            <div class="mt-2">
                                <div class="">
                                    <div class="editable" id=${html_} onkeyup="updateSideUserNoteNew(this.id)">${thisContent}</div>
                                </div>
                            </div>
                            <div class="mt-auto pt-4 flex items-center text-xs text-gray-500">
                                <button class="flex items-center text-gray-300">
                            
                                    User Definitiona
                                </button>
                        
                            </div>
                                
                        </div>
                    </div>
            
                        `)
                            $('[contenteditable]').on('keydown', function(e){
                                if(e.keyCode == 9){
                                    e.preventDefault();
                                    document.execCommand('insertHTML', false, '&#009');
                                }
                            }).css('white-space', 'pre-wrap');
                                                    refireEditor()
                                }
                        


                    
                    } else {
                        console.log("not done")
                    }
                    

                return html
            },
            start: `<span class="" spellcheck="false" style="border-bottom: 2px solid #93a4d7">`, end: `</span>`
            })
        },
        toolbar: {
        buttons: [
            'h2',
            'bold',
            'italic',
            'unorderedlist',
            'orderedlist',
            'table',
            'pop'
        ]
        }
    });

// safe3
function getCaretPosition() {
    var elem = document.getElementById("parent")
  var sel = window.getSelection();
  var cm_length = [0, 0];

  if(sel.anchorNode == elem)
    cm_length = [sel.anchorOffset, sel.extentOffset];
  else {
    var nodes_to_find = [sel.anchorNode, sel.extentNode];
    if(!elem.contains(sel.anchorNode) || !elem.contains(sel.extentNode))
      return undefined;
    else {
      var found = [0,0];
      var i;
      node_walk(elem, function(node) {
        for(i = 0; i < 2; i++) {
          if(node == nodes_to_find[i]) {
            found[i] = true;
            if(found[i == 0 ? 1 : 0])
              return false; // all done
          }
        }

        if(node.textContent && !node.firstChild) {
          for(i = 0; i < 2; i++) {
            if(!found[i])
              cm_length[i] += node.textContent.length;
          }
        }
      });
      cm_length[0] += sel.anchorOffset;
      cm_length[1] += sel.extentOffset;
    }
  }

  if(cm_length[0] <= cm_length[1]){
    console.log("JC", cm_length)
    $("#caretposition").html(cm_length)
    cursor_pos = parseFloat(cm_length[1]) 

    return cm_length;
  } else {
    $("#caretposition").html(cm_length[1])
    console.log("JC", cm_length[1], cm_length[0])
    cursor_pos = parseFloat(cm_length[1])
    return [cm_length[1], cm_length[0]];

  }
}


//on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);

  getCaretPosition()


  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

//on keydown, clear the countdown 
$input.on('keydown', function () {

  clearTimeout(typingTimer);
});


//safe4

function node_walk(node, func) {
    var result = func(node);
    for(node = node.firstChild; result !== false && node; node = node.nextSibling)
      result = node_walk(node, func);
    return result;
  };
  
  function SetCaretPosition(el, pos){
      console.log(el, pos, "here")
      // Loop through all child nodes
      for(var node of el.childNodes){
          if(node.nodeType == 3){ // we have a text node
              if(node.length >= pos){
                  // finally add our range
                  var range = document.createRange(),
                      sel = window.getSelection();
                  range.setStart(node,pos);
                  range.collapse(true);
                  sel.removeAllRanges();
                  sel.addRange(range);
                  return -1; // we are done
              }else{
                  pos -= node.length;
              }
          }else{
              pos = SetCaretPosition(node,pos);
              if(pos == -1){
                  return -1; // no need to finish the for loop
              }
          }
      }
      return pos; // needed because of recursion stuff
  }
  
  //user is "finished typing," do something
  function doneTyping () {
  
      underline()
      var elem = document.getElementById("parent")
      SetCaretPosition(elem, cursor_pos)
  
  }
  
  
      function tiger(x){
          console.log("gopne")
          var y = document.getElementById(x).textContent
          console.log(x, y)
          document.getElementById(y).scrollIntoView()
          document.getElementById("main_container2").style.width = `400px`
  
          
      }
  
  
      function underline(){
          console.log(trackSides, trackSides[0], "d01")
       
          for (let i = 0; i < trackSides.length; i++) {
              if(trackSides[i][1] == 0 ){
                  var inputText = document.getElementById("parent");
                  //? put in loop????? I Guess so.
                  var innerHTML = inputText.innerHTML;
                  //message
                  console.log(`we are going to update ${trackSides[i][0]} from: ${trackSides[i][1]} to ${parseInt(trackSides[i][1]) + 1} `)
                  trackSides[i][1] = 1
                  //logic
                  var randInt =   Math.floor(Math.random()*90000) + 10000;
                  var abc = trackSides[i][0]  
                  var index = innerHTML.indexOf(abc); 
                  
                  let func2 = () => alert('inline' + randInt);
                  $("#" + randInt).click(func2);
          
  
                  innerHTML = innerHTML.substring(0,index) + `<span onclick=tiger(${randInt}) style="border-bottom: 2px solid pink" id=${randInt}>${abc}</span>` + innerHTML.substring(index + abc.length);
                  inputText.innerHTML = innerHTML;
            
            
  
            
  
              } else {
                  console.log(`we will ignore ${trackSides[i][0]} as it is regisitered as  ${trackSides[i][1]}`)
              }
          }
      }
    var holdStrings = []
    var history_array = ["yea"]
    var keeped = []
    var global_kepped = []
    var glocount = 0
    var sidebarsa = []
    function called(){
                  //split up
                  saved()
                  
                  var current_split = split_and_clean()
                  console.log(current_split, "111")
                  //uniques
                  var get_uniques = uniques(current_split)
                  console.log(current_split, "112")
             
                  var rep = []
                  console.log(global_kepped, "gk")
      
                  for (let i = 0; i < global_kepped.length; i++) {
      
                      if(global_kepped[i][1] == 0){
                          
                          
                          var prevPrevWordLookup = global_kepped[i][0]
                          
                          console.log("going on: " + prevPrevWordLookup)
                          try {
                              if(keywords.include(prevPrevWordLookup) == true){
  
                                  
                                  
                                              randInt9 =   Math.floor(Math.random()*90000) + 10000;
                                              var randInt10 =   Math.floor(Math.random()*90000) + 10000;
                          
                                              var randInt8 =   randInt9 - 1
  
                                              $("#sidebar").prepend(`
                                              <div id=${prevPrevWordLookup}  class="group relative overflow-hidden md:first:row-span-2 group flex flex-col border border-orange-50 dark:border-gray-900 px-3 pb-4 pt-6 2x:pt-10 rounded-xl bg-gradient-to-r from-orange-500/5 to-white dark:from-gray-850 dark:to-gray-950 dark:hover:from-gray-800 hover:shadow-alternate shadow-none transition-shadow">
                                                  <div class="font-semibold text-lg flex items-center mt-auto mb-2 relative"> 
                                                      <span class="group-hover:underline">4443</span></div>
                                                      <span class="group-hover:underline">4442</span>
  
                          
                                                      <div class="text-lg flex items-center" style="width: 100% !important;  text-transform: capitalize">
                                                  
                                                          <div class="mx-auto"></div>
                          
                                                 
                                                      </div>
                          
                                                  <div class="font-normal text-smd text-gray-400 pr-4 relative">
                                                      
                                                 
                                                      <div class="mt-auto pt-4 items-center text-xs text-gray-500">
                                                          <button class=" items-center text-gray-300">
                                                      
                                                              User Definition
                          
                                                          </button>
                                                          <div class="mt-auto pt-4 items-center text-xs text-gray-500">
                                                              <div id="toast-simple" class="tag tag-yellow" role="alert">
                                                                  <span class="">User definition</span>
                                                              </div>
                                                          </div>
                                                  
                                                      </div>
                                                          
                                                  </div>
                                              </div>
                  
                                          `)
  
                                        
                                      
                                          refireEditor()
  
                                          trackSides.push([prevPrevWordLookup, 0])
  
                              
                              }
                          } catch (error) {
                              
                          }
  
                          try {
  
                              
                          } catch (error) {
                              
                          }
  
                          try {
                        
                                  if(keywords.includes(prevPrevWordLookup)) {
                                      counter = 0
                                      console.log("code9324")
                               
                                      var howMany = []
                                      var randInt4 =   Math.floor(Math.random()*90000) + 10000;
                                      var randInt5 =   randInt4 + 1
                                      var randInt2 =   Math.floor(Math.random()*90000) + 10000;
                                      var randInt7 =   Math.floor(Math.random()*90000) + 10000;
                                      var randInt9 =   Math.floor(Math.random()*90000) + 10000;
                                      var randInt8 =   prevPrevWordLookup
                                      var randInt3 =   randInt2 + 1
                                      var masterDiv = document.createElement("div");
  
          
                                      $("#sidebar").prepend(`
                                      
                                      <div id=${prevPrevWordLookup}  class="group borderUpDown relative overflow-hidden md:first:row-span-2 group flex flex-col border border-orange-50 dark:border-gray-900 px-3 pb-4 pt-6 2x:pt-10  bg-gradient-to-r from-orange-500/5 to-white dark:from-gray-850 dark:to-gray-950 dark:hover:from-gray-800 shadow-none transition-shadow">
                                              <div class="flex ">
                                                  <div class="">
                                                      <div class="text-2xl " style="font-weight: 600; text-transform: capitalize;">${randInt3}</div>
                                                  </div>
                                                  <div class="mx-auto"></div>
                                                  <div class="px-1 py-1 mr-2  rounded-3xl text-white" style="height: fit-content;" id=${ parseFloat(randInt7)  + 1 }  onclick="flick(this.id)">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
                                                  
                                                  </div>
                                            
                                              </div>
                                              <br>
                                          
                                              <div class="" style="font-size: 13px; margin-top: 7px;">
                                                  <div class="tabable" contenteditable="true" id=${randInt7}></div>  
                                              </div>
                                              <br>
                                              <div class="mt-auto pt-4 items-center text-xs text-gray-500">
                                 
  
                                                          <p style="font-size: 14px ; color: gainsboro; padding-left: 0px;"><span contenteditable="true" id="title" style="color: rgb(64, 120, 241);">${prevPrevWordLookup}</span>       
  
                                                  
                                                      </div>
                                          </div>
  
                                          <br/>
                             
                                          <br/>
  
                                      `)
                             
                      
                                      document.getElementById("sidebar").appendChild(masterDiv);
                                      refireEditor()
                                      trackSides.push([(prevPrevWordLookup), 0])
  
                                  } else {
  
                                  }
  
        
                                  
  
                              refireEditor()
  
                          } catch (error) {
                              
                          }
                          global_kepped[i][1] = 1
                         
                      }
                  }
  
              
  
                  get_uniques = rep
                  history_array = get_uniques
         
                  refireEditor() 
                  $('[contenteditable]').on('keydown', function(e){
                    if(e.keyCode == 9){
                        e.preventDefault();
                        document.execCommand('insertHTML', false, '&#009');
                    }
                }).css('white-space', 'pre-wrap');
    }
  
          function randomString(length, chars) {
                var result = '';
                    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
                    return result;
            }
  
  
          glocheckside = 0
          
          function saved(){
              var whatToSave = $('#parent').html()
              var whatToSaveTitle = $('#title').text().trim()
              var user = $('#userFrom').text()
              var compoundWhere = globalWhere + ":" + user
              b = compoundWhere.split(":")
              c = b[0] + ":" + user
              var clarifyWhere = "||" + c
              $("#note_id").text(c)
              if(glocheckside > 2){
  
                      oo  = chaseSideNotes()
                      console.log(oo, "oo")
  
                      console.log(sidebarsa, "galaxy")
  
                      var uni = [... new Set(sidebarsa)]
  
                      console.log(uni, "galaxy02")
  
                      console.log("saved")
  
                  } else {
                  
                  
              }
              glocheckside++
          }
  
  
          function del(where){
              document.getElementById(parseFloat(where - 1)).style.display = "none"
          }
  
          function hideThem(where){
              console.log("trig show ", where)
              var getIDS = []
              var tags = document.getElementById(where).getElementsByTagName("div")
              document.getElementById(tags[0].id).style.display = "block"
          }
  
          var count = 1
          function flick(where){
              var dip = parseFloat(where) - 1
              console.log(dip, "dip")
              var tags = document.getElementById(dip).getElementsByTagName("div")
              if(count == tags.length){
                  count = 0
                  // $(".paper").css("margin-top") = "2px"
                  document.getElementById(tags[count].id).style.display = "block"
                  document.getElementById(tags[count - 1].id).style.display = "none"
                  count++
              } else {
              console.log(tags[count])
                  document.getElementById(tags[count].id).style.display = "block"
                  document.getElementById(tags[count - 1].id).style.display = "none"
                  count++
              }
          }
  
  
          function uniques(array){
              var uni = [... new Set(array)]
              var metauni = []
  
  
              uni.forEach(element => {
                 if(getIndexOfK(global_kepped, element)){
                  
                 }  else {
                  global_kepped.push([element, 0])
                 }
   
              });
  
  
  
              return metauni
          }
  
          
          function split_and_clean(){
              x = document.getElementById("parent").textContent
              console.log(x, "www")
  
              var splitCurrentText_Array = x.split(" ")
              console.log(splitCurrentText_Array)
              var ensure = []
              splitCurrentText_Array.forEach(element => {
                  var ins = element.split(" ")
                  ins.forEach(elementa => {
                      ensure.push(elementa)
                  });
              });
              console.log(ensure)
              return ensure
          }
  
          //safe4
          function getIndexOfK(arr, k) {
              for (var i = 0; i < arr.length; i++) {
                  var index = arr[i].indexOf(k);
                  if (index > -1) {
                  return [i, index];
                  }
              }
          }
  
  
  
          function refire(){
              var editor = new MediumEditor('.editable', {
              buttonLabels: 'fontawesome',
              extensions: {
              table: new MediumEditorTable()
              },
              toolbar: {
              buttons: [
                  'h2',
                  'bold',
                  'italic',
                  'unorderedlist',
                  'orderedlist',
                  'table'
              ]
              }
          });
          }
   
          var editor = new MediumEditor('.editable', {
              buttonLabels: 'fontawesome',
              extensions: {
              table: new MediumEditorTable()
              },
              toolbar: {
              buttons: [
                  'h2',
                  'bold',
                  'italic',
                  'unorderedlist',
                  'orderedlist',
                  'table'
              ]
              }
          });
          var HighlighterButton = MediumEditor.Extension.extend({
          name: 'highlighter',
  
          init: function () {
              this.button = this.document.createElement('button');
              this.button.classList.add('medium-editor-action');
              this.button.innerHTML = '<b>H</b>';
          },
  
          getButton: function () {
              return this.button;
          }
          });
  
          var editor = new MediumEditor('.editable', {
              buttonLabels: 'fontawesome',
              extensions: {
              table: new MediumEditorTable()
              },
              toolbar: {
              buttons: [
                  'h2',
                  'bold',
                  'italic',
                  'unorderedlist',
                  'orderedlist',
                  'table'
              ]
              }
          });
      
  
          
          function refireEditor(){
  
            $('.tabable').on('keydown', function(e){
                if(e.keyCode == 9){
                    e.preventDefault();
                    document.execCommand('insertHTML', false, '&#009');
                }
                }).css('white-space', 'pre-wrap');
                
                var editor = new MediumEditor('.editable', {
                    buttonLabels: 'fontawesome',
                    extensions: {
                    table: new MediumEditorTable()
                },
                toolbar: {
                    buttons: [
                        'h2',
                        'bold',
                        'italic',
                        'unorderedlist',
                        'orderedlist',
                        'table'
                    ]
                }
                })

              
            }