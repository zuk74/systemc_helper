var tmpl_tb_h = (function() {/*\
#ifndef __TB_H_
#define __TB_H_

#include <systemc.h>

SC_MODULE( tb )
{
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].kind == "clock") { %>
  sc_in < <%= signals[i].type %> > <%= signals[i].var_name %>;
<%   } else { %>
  <%= signals[i].dir == "in" ? "sc_out" : "sc_in " %>< <%= signals[i].type %> > <%= signals[i].var_name %>;
<%   } %>
<% } %>

  SC_CTOR( tb )
<% for (var i=0; i<signals.length; i++) { %>
    <%= i==0 ? ":" : "," %> <%= signals[i].var_name %>( "<%= signals[i].var_name %>" )
<% } %>
  {
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].kind == "clock") { %>
    SC_CTHREAD( thread_src, <%= signals[i].var_name %>.pos() );
<%     break; %>
<%   } %>
<% } %>
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].kind == "sync_reset") { %>
    reset_signal_is( <%= signals[i].var_name %>, true );
<%   } else if (signals[i].kind == "async_reset") { %>
    asyn_reset_signal_is( <%= signals[i].var_name %>, false );
<%   } %>
<% } %>

<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].kind == "clock") { %>
    //SC_CTHREAD( thread_sink, <%= signals[i].var_name %>.pos() );
<%     break; %>
<%   } %>
<% } %>
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].kind == "sync_reset") { %>
    //reset_signal_is( <%= signals[i].var_name %>, true );
<%   } else if (signals[i].kind == "async_reset") { %>
    //asyn_reset_signal_is( <%= signals[i].var_name %>, false );
<%   } %>
<% } %>
  }

  void thread_src();
  //void thread_sink();
};

#endif
*/}).toString().match(/\/\*([^]*)\*\//)[1];
