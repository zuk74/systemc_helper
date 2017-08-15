var tmpl_dut_h = (function() {/*\
#ifndef __<%= module_name.toUpperCase() %>_H_
#define __<%= module_name.toUpperCase() %>_H_

#include <systemc.h>

SC_MODULE( <%= module_name %> )
{
<% for (var i=0; i<signals.length; i++) { %>
  <%= signals[i].dir == "in" ? "sc_in " : "sc_out" %>< <%= signals[i].type %> > <%= signals[i].var_name %>;
<% } %>

  SC_CTOR( <%= module_name %> )
<% for (var i=0; i<signals.length; i++) { %>
    <%= i==0 ? ":" : "," %> <%= signals[i].var_name %>( "<%= signals[i].var_name %>" )
<% } %>
  {
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].kind == "clock") { %>
    SC_CTHREAD( thread_main, <%= signals[i].var_name %>.pos() );
<%     break; %>
<%   } %>
<% } %>
<% for (var i=0; i<signals.length; i++) { %>
<%   if (signals[i].kind == "sync_reset") { %>
    reset_signal_is( <%= signals[i].var_name %>, true );
<%   } else if (signals[i].kind == "async_reset") { %>
    async_reset_signal_is( <%= signals[i].var_name %>, false );
<%   } %>
<% } %>
  }

  void thread_main();
};

#endif
*/}).toString().match(/\/\*([^]*)\*\//)[1];
