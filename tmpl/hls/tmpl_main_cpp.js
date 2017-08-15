var tmpl_main_cpp = (function() {/*\
#include <systemc.h>
#include "systop.h"

int sc_main(int argc, char* argv[])
{
<% if (options.vivado_hls) { %>
  sc_report_handler::set_actions("/IEEE_Std_1666/deprecated", SC_DO_NOTHING);
  sc_report_handler::set_actions( SC_ID_LOGIC_X_TO_BOOL_, SC_LOG);
  sc_report_handler::set_actions( SC_ID_VECTOR_CONTAINS_LOGIC_VALUE_, SC_LOG);
  sc_report_handler::set_actions( SC_ID_OBJECT_EXISTS_, SC_LOG);
<% } %>

  systop *i_systop = new systop("i_systop");

<% if (options.vcd_dump) { %>
#ifdef SYSC_DUMP_VCD_FILE
  sc_trace_file *tf;
  tf = sc_create_vcd_trace_file("systemc");
  tf->set_time_unit( 1.0, SC_NS ); // timescale

<%   for (var i=0; i<signals.length; i++) { %>
  sc_trace( tf, i_systop->i_<%= module_name %>.<%= signals[i].var_name %>, "i_systop.i_<%= module_name %>.<%= signals[i].var_name %>");
<%   } %>
#endif
<% } %>

  sc_start();

<% if (options.vcd_dump) { %>
#ifdef SYSC_DUMP_VCD_FILE
  sc_close_vcd_trace_file( tf );
#endif
<% } %>

  return 0;
}
*/}).toString().match(/\/\*([^]*)\*\//)[1];
