var tmpl_dut_h = (function() {/*#ifndef __<%= module_name.toUpperCase() %>_H_
#define __<%= module_name.toUpperCase() %>_H_

#include <systemc.h>

SC_MODULE( <%= module_name %> )
{
  SC_CTOR( <%= module_name %> )
  {
  }
};

#endif
*/}).toString().match(/\/\*([^]*)\*\//)[1];
