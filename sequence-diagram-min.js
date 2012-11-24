/** js sequence diagrams 0.9
 *  http://bramp.github.com/js-sequence-diagrams/
 *  (c) 2012 Andrew Brampton (bramp.net)
 *  @license Simplified BSD license.
 */
(function(){"use strict";function Diagram(){this.title=void 0,this.actors=[],this.signals=[]}function ParseError(message,hash){this.name="ParseError",this.message=message||"",this.text=hash.text,this.token=hash.token,this.line=hash.line,this.loc=hash.loc,this.expected=hash.expected}Diagram.prototype.getActor=function(name){var actors=this.actors;for(var i in actors)if(actors[i].name==name)return actors[i];var i=actors.push(new Diagram.Actor(name,actors.length));return actors[i-1]},Diagram.prototype.setTitle=function(title){this.title=title},Diagram.prototype.addSignal=function(signal){this.signals.push(signal)},Diagram.Actor=function(name,index){this.name=name,this.index=index},Diagram.Signal=function(actorA,signaltype,actorB,message){this.type="Signal",this.actorA=actorA,this.actorB=actorB,this.linetype=signaltype,this.arrowtype=signaltype>>2,this.message=message},Diagram.Note=function(actor,placement,message){this.type="Note",this.actor=actor,this.placement=placement,this.message=message},Diagram.LINETYPE={SOLID:0,DOTTED:1},Diagram.ARROWTYPE={FILLED:0,OPEN:1},Diagram.PLACEMENT={LEFTOF:0,RIGHTOF:1,OVER:2};var grammar=function(){function Parser(){this.yy={}}var parser={trace:function(){},yy:{},symbols_:{error:2,start:3,document:4,line:5,statement:6,NL:7,EOF:8,participant:9,actor:10,signal:11,note_statement:12,title:13,message:14,note:15,placement:16,left_of:17,right_of:18,over:19,signaltype:20,ACTOR:21,linetype:22,arrowtype:23,LINE:24,DOTLINE:25,ARROW:26,OPENARROW:27,MESSAGE:28,$accept:0,$end:1},terminals_:{2:"error",7:"NL",8:"EOF",9:"participant",13:"title",15:"note",17:"left_of",18:"right_of",19:"over",21:"ACTOR",24:"LINE",25:"DOTLINE",26:"ARROW",27:"OPENARROW",28:"MESSAGE"},productions_:[0,[3,1],[4,0],[4,2],[5,2],[5,2],[5,1],[5,1],[6,2],[6,1],[6,1],[6,2],[12,4],[16,1],[16,1],[16,1],[11,4],[10,1],[20,2],[20,1],[22,1],[22,1],[23,1],[23,1],[14,1]],performAction:function(yytext,yyleng,yylineno,yy,yystate,$$){var $0=$$.length-1;switch(yystate){case 1:return yy;case 4:break;case 5:break;case 8:break;case 9:yy.addSignal($$[$0]);break;case 10:yy.addSignal($$[$0]);break;case 11:yy.setTitle($$[$0]);break;case 12:this.$=new Diagram.Note($$[$0-1],$$[$0-2],$$[$0]);break;case 13:this.$=Diagram.PLACEMENT.LEFTOF;break;case 14:this.$=Diagram.PLACEMENT.RIGHTOF;break;case 15:this.$=Diagram.PLACEMENT.OVER;break;case 16:this.$=new Diagram.Signal($$[$0-3],$$[$0-2],$$[$0-1],$$[$0]);break;case 17:this.$=yy.getActor($$[$0]);break;case 18:this.$=$$[$0-1]|$$[$0]<<2;break;case 19:this.$=$$[$0];break;case 20:this.$=Diagram.LINETYPE.SOLID;break;case 21:this.$=Diagram.LINETYPE.DOTTED;break;case 22:this.$=Diagram.ARROWTYPE.FILLED;break;case 23:this.$=Diagram.ARROWTYPE.OPEN;break;case 24:this.$=$$[$0].substring(1)}},table:[{1:[2,2],3:1,4:2,7:[2,2],8:[2,2],9:[2,2],13:[2,2],15:[2,2],21:[2,2]},{1:[3]},{1:[2,1],5:3,6:4,7:[1,5],8:[1,6],9:[1,7],10:11,11:8,12:9,13:[1,10],15:[1,12],21:[1,13]},{1:[2,3],7:[2,3],8:[2,3],9:[2,3],13:[2,3],15:[2,3],21:[2,3]},{7:[1,14],8:[1,15]},{1:[2,6],7:[2,6],8:[2,6],9:[2,6],13:[2,6],15:[2,6],21:[2,6]},{1:[2,7],7:[2,7],8:[2,7],9:[2,7],13:[2,7],15:[2,7],21:[2,7]},{10:16,21:[1,13]},{7:[2,9],8:[2,9]},{7:[2,10],8:[2,10]},{14:17,28:[1,18]},{20:19,22:20,24:[1,21],25:[1,22]},{16:23,17:[1,24],18:[1,25],19:[1,26]},{7:[2,17],8:[2,17],24:[2,17],25:[2,17],28:[2,17]},{1:[2,4],7:[2,4],8:[2,4],9:[2,4],13:[2,4],15:[2,4],21:[2,4]},{1:[2,5],7:[2,5],8:[2,5],9:[2,5],13:[2,5],15:[2,5],21:[2,5]},{7:[2,8],8:[2,8]},{7:[2,11],8:[2,11]},{7:[2,24],8:[2,24]},{10:27,21:[1,13]},{21:[2,19],23:28,26:[1,29],27:[1,30]},{21:[2,20],26:[2,20],27:[2,20]},{21:[2,21],26:[2,21],27:[2,21]},{10:31,21:[1,13]},{21:[2,13]},{21:[2,14]},{21:[2,15]},{14:32,28:[1,18]},{21:[2,18]},{21:[2,22]},{21:[2,23]},{14:33,28:[1,18]},{7:[2,16],8:[2,16]},{7:[2,12],8:[2,12]}],defaultActions:{24:[2,13],25:[2,14],26:[2,15],28:[2,18],29:[2,22],30:[2,23]},parseError:function(str){throw Error(str)},parse:function(input){function lex(){var token;return token=self.lexer.lex()||1,"number"!=typeof token&&(token=self.symbols_[token]||token),token}var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext="",yylineno=0,yyleng=0,recovering=0;this.lexer.setInput(input),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,this.lexer.yylloc===void 0&&(this.lexer.yylloc={});var yyloc=this.lexer.yylloc;lstack.push(yyloc);var ranges=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var symbol,preErrorSymbol,state,action,r,p,len,newState,expected,yyval={};;){if(state=stack[stack.length-1],this.defaultActions[state]?action=this.defaultActions[state]:((null===symbol||symbol===void 0)&&(symbol=lex()),action=table[state]&&table[state][symbol]),action===void 0||!action.length||!action[0]){var errStr="";if(!recovering){expected=[];for(p in table[state])this.terminals_[p]&&p>2&&expected.push("'"+this.terminals_[p]+"'");errStr=this.lexer.showPosition?"Parse error on line "+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(", ")+", got '"+(this.terminals_[symbol]||symbol)+"'":"Parse error on line "+(yylineno+1)+": Unexpected "+(1==symbol?"end of input":"'"+(this.terminals_[symbol]||symbol)+"'"),this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected})}}if(action[0]instanceof Array&&action.length>1)throw Error("Parse Error: multiple actions possible at state: "+state+", token: "+symbol);switch(action[0]){case 1:stack.push(symbol),vstack.push(this.lexer.yytext),lstack.push(this.lexer.yylloc),stack.push(action[1]),symbol=null,preErrorSymbol?(symbol=preErrorSymbol,preErrorSymbol=null):(yyleng=this.lexer.yyleng,yytext=this.lexer.yytext,yylineno=this.lexer.yylineno,yyloc=this.lexer.yylloc,recovering>0&&recovering--);break;case 2:if(len=this.productions_[action[1]][1],yyval.$=vstack[vstack.length-len],yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column},ranges&&(yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]),r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack),r!==void 0)return r;len&&(stack=stack.slice(0,2*-1*len),vstack=vstack.slice(0,-1*len),lstack=lstack.slice(0,-1*len)),stack.push(this.productions_[action[1]][0]),vstack.push(yyval.$),lstack.push(yyval._$),newState=table[stack[stack.length-2]][stack[stack.length-1]],stack.push(newState);break;case 3:return!0}}return!0}},lexer=function(){var lexer={EOF:1,parseError:function(str,hash){if(!this.yy.parser)throw Error(str);this.yy.parser.parseError(str,hash)},setInput:function(input){return this._input=input,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var ch=this._input[0];this.yytext+=ch,this.yyleng++,this.offset++,this.match+=ch,this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);return lines?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),ch},unput:function(ch){var len=ch.length,lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-len-1),this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),lines.length-1&&(this.yylineno-=lines.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-len]),this},more:function(){return this._more=!0,this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length>20?"...":"")+past.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var next=this.match;return 20>next.length&&(next+=this._input.substr(0,20-next.length)),(next.substr(0,20)+(next.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var pre=this.pastInput(),c=Array(pre.length+1).join("-");return pre+this.upcomingInput()+"\n"+c+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var token,match,tempMatch,index,lines;this._more||(this.yytext="",this.match="");for(var rules=this._currentRules(),i=0;rules.length>i&&(tempMatch=this._input.match(this.rules[rules[i]]),!tempMatch||match&&!(tempMatch[0].length>match[0].length)||(match=tempMatch,index=i,this.options.flex));i++);return match?(lines=match[0].match(/(?:\r\n?|\n).*/g),lines&&(this.yylineno+=lines.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length},this.yytext+=match[0],this.match+=match[0],this.matches=match,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(match[0].length),this.matched+=match[0],token=this.performAction.call(this,this.yy,this,rules[index],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),token?token:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return r!==void 0?r:this.lex()},begin:function(condition){this.conditionStack.push(condition)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(condition){this.begin(condition)}};return lexer.options={"case-insensitive":!0},lexer.performAction=function(yy,yy_,$avoiding_name_collisions,YY_START){switch($avoiding_name_collisions){case 0:return 7;case 1:break;case 2:return 9;case 3:return 17;case 4:return 18;case 5:return 19;case 6:return 15;case 7:return 13;case 8:return 21;case 9:return 25;case 10:return 24;case 11:return 27;case 12:return 26;case 13:return 28;case 14:return 8;case 15:return"INVALID"}},lexer.rules=[/^(?:[\n]+)/i,/^(?:[ \t]+)/i,/^(?:participant\b)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:over\b)/i,/^(?:note\b)/i,/^(?:title\b)/i,/^(?:[^->:\n]+\b)/i,/^(?:--)/i,/^(?:-)/i,/^(?:>>)/i,/^(?:>)/i,/^(?:[^\n]+)/i,/^(?:$)/i,/^(?:.)/i],lexer.conditions={INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],inclusive:!0}},lexer}();return parser.lexer=lexer,Parser.prototype=parser,parser.Parser=Parser,new Parser}();"undefined"!=typeof require&&"undefined"!=typeof exports&&(exports.parser=grammar,exports.Parser=grammar.Parser,exports.parse=function(){return grammar.parse.apply(grammar,arguments)},exports.main=function(args){if(!args[1])throw Error("Usage: "+args[0]+" FILE");var source;return source="undefined"!=typeof process?require("fs").readFileSync(require("path").resolve(args[1]),"utf8"):require("file").path(require("file").cwd()).join(args[1]).read({charset:"utf-8"}),exports.parser.parse(source)},"undefined"!=typeof module&&require.main===module&&exports.main("undefined"!=typeof process?process.argv.slice(1):require("system").args)),ParseError.prototype=Error(),Diagram.ParseError=ParseError,grammar.parseError=function(message,hash){throw new ParseError(message,hash)},Diagram.parse=function(input){return grammar.yy=new Diagram,grammar.parse(input)},this.Diagram=Diagram}).call(this),function(){"use strict";function AssertException(message){this.message=message}function assert(exp,message){if(!exp)throw new AssertException(message)}var DIAGRAM_MARGIN=10,ACTOR_MARGIN=10,ACTOR_PADDING=10,SIGNAL_MARGIN=5,SIGNAL_PADDING=5,NOTE_MARGIN=10,NOTE_PADDING=5,TITLE_MARGIN=0,TITLE_PADDING=5,PLACEMENT=Diagram.PLACEMENT;Diagram.LINETYPE,Diagram.ARROWTYPE;var LINE={stroke:"#000","stroke-width":2};AssertException.prototype.toString=function(){return"AssertException: "+this.message},Raphael.fn.line=function(x1,y1,x2,y2){return assert(_.all([x1,x2,y1,y2],_.isFinite),"x1,x2,y1,y2 must be numeric"),this.path("M{0},{1} L{2},{3}",x1,y1,x2,y2)},Raphael.fn.wobble=function(x1,y1,x2,y2){assert(_.all([x1,x2,y1,y2],_.isFinite),"x1,x2,y1,y2 must be numeric");var wobble=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))/25,r1=Math.random(),r2=Math.random(),xfactor=Math.random()>.5?wobble:-wobble,yfactor=Math.random()>.5?wobble:-wobble,p1={x:(x2-x1)*r1+x1+xfactor,y:(y2-y1)*r1+y1+yfactor},p2={x:(x2-x1)*r2+x1-xfactor,y:(y2-y1)*r2+y1-yfactor};return"C"+p1.x+","+p1.y+" "+p2.x+","+p2.y+" "+x2+","+y2},Raphael.fn.handRect=function(x,y,w,h){return assert(_.all([x,y,w,h],_.isFinite),"x, y, w, h must be numeric"),this.path("M"+x+","+y+this.wobble(x,y,x+w,y)+this.wobble(x+w,y,x+w,y+h)+this.wobble(x+w,y+h,x,y+h)+this.wobble(x,y+h,x,y))},Raphael.fn.handLine=function(x1,y1,x2,y2){return assert(_.all([x1,x2,y1,y2],_.isFinite),"x1,x2,y1,y2 must be numeric"),this.path("M"+x1+","+y1+this.wobble(x1,y1,x2,y2))},Diagram.prototype.drawSVG=function(container){function actor_ensure_distance(a,b,d){assert(b>a,"a must be less than or equal to b"),0>a?(b=actors[b],b.x=Math.max(d-b.width/2,b.x)):b>=actors.length?(a=actors[a],a.padding_right=Math.max(d,a.padding_right)):(a=actors[a],a.distances[b]=Math.max(d,a.distances[b]?a.distances[b]:0))}function draw_actors(){var y=DIAGRAM_MARGIN+title.height;_.each(actors,function(a){draw_actor.call(a,y,actors_height),draw_actor.call(a,y+actors_height+signals_height,actors_height);var aX=a.x+a.width/2,line=paper.handLine(aX,y+actors_height-ACTOR_MARGIN,aX,y+actors_height+ACTOR_MARGIN+signals_height);line.attr(LINE)})}function draw_signal(offsetY){var y=offsetY+this.height-SIGNAL_MARGIN,aX=this.actorA.x+this.actorA.width/2,bX=this.actorB.x+this.actorB.width/2,line=paper.handLine(aX,y,bX,y);line.attr(LINE),line.attr({"arrow-end":arrow_types[this.arrowtype]+"-wide-long","stroke-dasharray":line_types[this.linetype]});var midx=(bX-aX)/2+aX;paper.print(midx-this.width/2,offsetY+this.height/2,this.message,font,16,"middle")}function draw_text_box(box,text,margin,padding){var x=box.x+margin,y=box.y+margin,w=box.width-2*margin,h=box.height-2*margin,rect=paper.handRect(x,y,w,h);rect.attr(LINE),x=box.x+box.width/2,y=box.y+box.height/2,paper.print(box.x+padding,y,text,font,16,"middle")}function draw_actor(offsetY){this.y=offsetY,draw_text_box(this,this.name,ACTOR_MARGIN,ACTOR_PADDING)}function draw_note(offsetY){switch(this.y=offsetY,this.placement){case PLACEMENT.RIGHTOF:this.x=this.actor.x+this.actor.width/2+ACTOR_MARGIN;break;case PLACEMENT.LEFTOF:this.x=this.actor.x+this.actor.width/2-ACTOR_MARGIN-this.width;break;default:throw Error("Unhandled note placement:"+this.placement)}draw_text_box(this,this.message,NOTE_MARGIN,NOTE_PADDING)}function draw_signals(){var y=DIAGRAM_MARGIN+title.height+actors_height;_.each(signals,function(s){"Signal"==s.type?draw_signal.call(s,y):"Note"==s.type&&draw_note.call(s,y),y+=s.height})}function draw_title(){title.message&&draw_text_box(title,title.message,TITLE_MARGIN,TITLE_PADDING)}var actors=this.actors,signals=this.signals,paper=new Raphael(container,320,200),font=paper.getFont("daniel"),diagram_width=0,diagram_height=0,title={x:0,y:0,width:0,height:0};if(this.title){var p=paper.print(0,0,this.title,font,16,"middle");title=p.getBBox(),title.message=this.title,p.remove(),title.width+=2*(TITLE_PADDING+TITLE_MARGIN),title.height+=2*(TITLE_PADDING+TITLE_MARGIN),title.x=DIAGRAM_MARGIN,title.y=DIAGRAM_MARGIN,diagram_width=title.width}var actors_height=0;_.each(actors,function(a){var p=paper.print(0,0,a.name,font,16,"middle"),bb=p.getBBox();p.remove(),a.x=0,a.y=0,a.width=bb.width+2*(ACTOR_PADDING+ACTOR_MARGIN),a.height=bb.height+2*(ACTOR_PADDING+ACTOR_MARGIN),a.distances=[],a.padding_right=0,actors_height=Math.max(a.height,actors_height)});var signals_height=0;_.each(signals,function(s){var a,b,p=paper.print(0,0,s.message,font,16,"middle"),bb=p.getBBox();p.remove(),s.width=bb.width,s.height=bb.height;var extra_width=0;if("Signal"==s.type)s.width+=2*(SIGNAL_MARGIN+SIGNAL_PADDING),s.height+=2*(SIGNAL_MARGIN+SIGNAL_PADDING),a=Math.min(s.actorA.index,s.actorB.index),b=Math.max(s.actorA.index,s.actorB.index);else{if("Note"!=s.type)throw Error("Unhandled signal type:"+s.type);if(s.width+=2*(NOTE_MARGIN+NOTE_PADDING),s.height+=2*(NOTE_MARGIN+NOTE_PADDING),extra_width=2*ACTOR_MARGIN,s.placement==PLACEMENT.LEFTOF)b=s.actor.index,a=b-1;else if(s.placement==PLACEMENT.RIGHTOF)a=s.actor.index,b=a+1;else if(s.placement==PLACEMENT.OVER)return a=s.actor.index,actor_ensure_distance(a-1,a,s.width/2),actor_ensure_distance(a,a+1,s.width/2),void 0}actor_ensure_distance(a,b,s.width+extra_width),signals_height+=s.height});var actors_width=0;_.each(actors,function(a){a.x=Math.max(actors_width,a.x),_.each(a.distances,function(distance,b){b=actors[b],distance=Math.max(distance,a.width/2,b.width/2),b.x=Math.max(b.x,a.x+a.width/2+distance-b.width/2)}),actors_width=a.x+a.width+a.padding_right}),diagram_width=Math.max(actors_width,diagram_width),diagram_width+=2*DIAGRAM_MARGIN,diagram_height+=2*DIAGRAM_MARGIN+2*actors_height+signals_height+title.height,paper.setStart(),paper.setSize(diagram_width,diagram_height);var line_types=["","-"],arrow_types=["block","open"];draw_title(),draw_actors(),draw_signals(),paper.setFinish()}}();