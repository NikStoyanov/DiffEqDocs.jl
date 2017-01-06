var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#DifferentialEquations.jl-Documentation-1",
    "page": "Home",
    "title": "DifferentialEquations.jl Documentation",
    "category": "section",
    "text": "DifferentialEquations.jl is a package for solving numerically solving differential equations using the various components of JuliaDiffEq. The purpose of this package is to supply efficient Julia implementations of solvers for various differential equations. Equations within the realm of this package include ordinary differential equations (ODEs), stochastic ordinary differential equations (SODEs or SDEs), stochastic partial differential equations (SPDEs), partial differential equations (with both finite difference and finite element methods), differential algebraic equations (DAEs), and differential delay equations (DDEs). The well-optimized DifferentialEquations solvers benchmark as the fastest Julia implementations, using classic algorithms and ones from recent research, and include algorithms optimized for high-precision and HPC applications.  It integrates with the Julia package sphere, for example using Juno's progress meter, automatic plotting, built-in interpolations, and wraps other differential equation solvers so that many different methods for solving the equations can be accessed by simply switching a keyword argument. It utilizes Julia's generality to be able to solve problems specified with arbitrary number types (types with units like Unitful, and arbitrary precision numbers like BigFloats and ArbFloats), arbitrary sized arrays (ODEs on matrices), and more. This gives a powerful mixture of speed and productivity features to help you solve and analyze your differential equations faster.If you have any questions, or just want to chat about solvers/using the package, please feel free to use the Gitter channel. For bug reports, feature requests, etc., please submit an issue. If you're interested in contributing, please see the Developer Documentation."
},

{
    "location": "index.html#Using-the-Package-1",
    "page": "Home",
    "title": "Using the Package",
    "category": "section",
    "text": "To install the package, use the following command inside the Julia REPL:Pkg.add(\"DifferentialEquations\")To load the package, use the command:using DifferentialEquationsTo understand the package in more detail, check out the following tutorials in the manual. Example IJulia notebooks can be found in DiffEqTutorials.jl. If you find any example where there seems to be an error, please open an issue.For the most up to date on using the package information, please join the Gitter channelUsing the bleeding edge for the latest features and development is only recommended for power users. Information for how to get to the bleeding edge is found in the developer documentation."
},

{
    "location": "index.html#Supported-Equations-1",
    "page": "Home",
    "title": "Supported Equations",
    "category": "section",
    "text": "For PDEs, one can optionally specify a noise equation. The solvers currently have stochastic variants for handling Gaussian Space-time white noise SPDEs.ODEs\nSODEs\nDAEs\n(Stochastic) PDEs\nLinear Poisson Equation\nSemi-linear Poisson Equation\nLinear Heat Equation\nSemi-linear Heat Equation (aka Reaction-Diffusion Equation)\nStationary Stokes EquationFor help with choosing a solver algorithm, please see the solver options pages."
},

{
    "location": "index.html#IJulia-Notebook-Tutorials-1",
    "page": "Home",
    "title": "IJulia Notebook Tutorials",
    "category": "section",
    "text": "You can access extra tutorials supplied in the DiffEqTutorials.jl repository. If you have IJulia installed, you can view them locally and interactively, by cloning the repository:Pkg.clone(\"https://github.com/JuliaDiffEq/DiffEqTutorials.jl\")\nusing IJulia\nnotebook(dir = Pkg.dir(\"DiffEqTutorials\"))"
},

{
    "location": "index.html#Tutorials-1",
    "page": "Home",
    "title": "Tutorials",
    "category": "section",
    "text": "The following tutorials will introduce you to the functionality of DifferentialEquations.jl More examples can be found by checking out the IJulia notebooks in the examples folder.Pages = [\n    \"tutorials/ode_example.md\",\n    \"tutorials/sde_example.md\",\n    \"tutorials/dae_example.md\",\n    \"tutorials/fempoisson_example.md\",\n    \"tutorials/femheat_example.md\",\n    \"tutorials/femstochastic_example.md\"\n    ]\nDepth = 2"
},

{
    "location": "index.html#Basics-1",
    "page": "Home",
    "title": "Basics",
    "category": "section",
    "text": "These pages introduce you to the core of DifferentialEquations.jl and the common interface. It explains the general workflow, options which are generally available, and the general tools for analysis.Pages = [\n    \"basics/overview.md\",\n    \"basics/common_solver_opts.md\",\n    \"basics/solution.md\",\n    \"basics/plot.md\",\n    \"basics/integrator.md\"\n    ]\nDepth = 2"
},

{
    "location": "index.html#Equation-Types-1",
    "page": "Home",
    "title": "Equation Types",
    "category": "section",
    "text": "These pages describe building the problem types to define differential equations for the solvers, and the special features of the different solution types.Pages = [\n  \"types/ode_types.md\",\n  \"types/sde_types.md\",\n  \"types/dae_types.md\",\n  \"types/fem_types.md\",\n  \"types/stokes_types.md\"\n]\nDepth = 2"
},

{
    "location": "index.html#Solver-Algorithms-1",
    "page": "Home",
    "title": "Solver Algorithms",
    "category": "section",
    "text": "These pages describe the solvers and available algorithms in detail.Pages = [\n  \"solvers/ode_solve.md\",\n  \"solvers/sde_solve.md\",\n  \"solvers/dae_solve.md\",\n  \"solvers/fempoisson_solve.md\",\n  \"solvers/femheat_solve.md\",\n  \"solvers/fdmstokes_solve.md\"\n]\nDepth = 2"
},

{
    "location": "index.html#Additional-Features-1",
    "page": "Home",
    "title": "Additional Features",
    "category": "section",
    "text": "These sections discuss extra performance enhancements, event handling, and other in-depth features.Pages = [\n    \"features/performance_overloads.md\",\n    \"features/callback_functions.md\",\n    \"features/mesh.md\",\n    \"features/output_specification.md\",\n    \"features/conditional_dependencies.md\",\n    \"features/progress_bar.md\"\n]\nDepth = 2"
},

{
    "location": "index.html#Analysis-Tools-1",
    "page": "Home",
    "title": "Analysis Tools",
    "category": "section",
    "text": "Because DifferentialEquations.jl has a common interface on the solutions, it is easy to add functionality to the entire DiffEq ecosystem by developing it to the solution interface. These pages describe the add-on analysis tools which are available.Pages = [\n    \"analysis/parameterized_functions.md\",\n    \"analysis/parameter_estimation.md\",\n    \"analysis/sensitivity.md\",\n    \"analysis/dev_and_test.md\"\n]\nDepth = 2"
},

{
    "location": "tutorials/ode_example.html#",
    "page": "Ordinary Differential Equations (ODE)",
    "title": "Ordinary Differential Equations (ODE)",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/ode_example.html#Ordinary-Differential-Equations-(ODE)-1",
    "page": "Ordinary Differential Equations (ODE)",
    "title": "Ordinary Differential Equations (ODE)",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving ODEs. Other introductions can be found by checking out DiffEqTutorials.jl.In this example we will solve the equationfracdudt = f(tu)on the time interval tin01 where f(tu)=u. We know via Calculus that the solution to this equation is u(t)=uexp(t). To solve this numerically, we define a problem type by giving it the equation, the initial condition, and the timespan to solve over:using DifferentialEquations\nα=1\nu0=1/2\nf(t,u) = α*u\ntspan = (0.0,1.0)\nprob = ODEProblem(f,u0,tspan)Note that DifferentialEquations.jl will choose the types for the problem based on the types used to define the problem type. For our example, notice that u0 is a Float64, and therefore this will solve with the independent variables being Float64. Since tspan = (0.0,1.0) is a tuple of Float64's, the dependent variabes will be solved using Float64's (note that the start time and end time must match types). You can use this to choose to solve with arbitrary precision numbers, unitful numbers, etc. Please see the tutorials for more details.After defining a problem, you solve it using solve.sol = solve(prob)DifferentialEquations.jl has a method for choosing the default solver algorithm and the (adaptive) stepsizes dt, and so this will find an efficient method to solve your problem. You can also explicitly choose an algorithm and pass in some parameters.sol = solve(prob,Euler(),dt=1/2^4)In this case I chose to use the classic Euler method, and gave it a stepsize dt=1/2^4. Normally dt is the starting stepsize but since the Euler method is not adaptive this is the stepsize for the calculation. The available options is described on the Common Solver Options manual page.The result of solve is a solution object. We can access the 5th value of the solution withsol[5] #.637or get the time of the 8th timestep bysol.t[8]\n#.438Convenience features are also included. We can build an array using a comprehension over the solution tuples via[t+u for (t,u) in tuples(sol)]or more generally[t+2u for (t,u) in zip(sol.t,sol.u)]allows one to use more parts of the solution type. The object that is returns by default acts as a continuous solution via an interpolation. We can access the interpolated values by treating sol as a function, for example:sol(0.45) # The value of the solution at t=0.45For details on more finely controlling the output, see the Output Specification manual pagePlotting commands are provided via a recipe to Plots.jl. To plot the solution object, simply call plot:using Plots\n#gr() # You can optionally choose a plotting backend\nplot(sol)If you are in Juno, this will plot to the plot pane. To open an interactive GUI (dependent on the backend), use the gui command:gui()The plot function can be formatted using the attributes available in Plots.jl. For more of an introduction to plotting solutions, see the IJulia notebook."
},

{
    "location": "tutorials/ode_example.html#Other-Algorithms-1",
    "page": "Ordinary Differential Equations (ODE)",
    "title": "Other Algorithms",
    "category": "section",
    "text": "DifferentialEquations.jl offers a much wider variety of solver algorithms than traditional differential equations libraries. Many of these algorithms are from recent research and have been shown to be more efficient than the \"standard\" algorithms (which are also available). For example, we can choose a 7th order Verner Efficient method:sol = solve(prob,Vern7())\nplot(sol,title=\"Solving using the Vern7 Method\")(Image: Better ODE Solution)Because these advanced algorithms may not be known to most users, DifferentialEquations.jl offers an advanced method for choosing algorithm defaults. This algorithm utilizes the precisions of the number types and the keyword arguments (such as the tolerances) to select an algorithm. Additionally one can provide alg_hints to help choose good defaults using properties of the problem and necessary features for the solution. For example, if we have a stiff problem but don't know the best stiff algorithm for this problem, we can usesol = solve(prob,alg_hints=[:stiff])Please see the solver documentation for details on the algorithms and recommendations."
},

{
    "location": "tutorials/ode_example.html#Systems-of-Equations-1",
    "page": "Ordinary Differential Equations (ODE)",
    "title": "Systems of Equations",
    "category": "section",
    "text": "We can also solve systems of equations. DifferentialEquations.jl can handle many different independent variable types (generally, anything with a linear index should work!). So instead of showing solving a vector equation, let's let u be a matrix! To do this, we simply need to have u₀ be a matrix, and define f such that it takes in a matrix and outputs a matrix. We can define a matrix of linear ODEs as follows:A = [1. 0 0 -5\n     4 -2 4 -3\n     -4 0 0 1\n     5 -2 2 3]\nu0 = rand(4,2)\ntspan = (0.0,1.0)\nf(t,u) = A*u\nprob = ODEProblem(f,u0,tspan)Here our ODE is on a 4x2 matrix, and the ODE is the linear system defined by multiplication by A. To solve the ODE, we do the same steps as before.sol = solve(prob)\nplot(sol)(Image: ODE System Solution)Note that the analysis tools generalize over to systems of equations as well.sol[4]still returns the solution at the fourth timestep. It also indexes into the array as well.sol[3,5]is the value of the 5th component (by linear indexing) at the 3rd timepoint, orsol[:,2,1]is the timeseries for the component which is the 2nd row and 1 column."
},

{
    "location": "tutorials/ode_example.html#In-Place-Updates-1",
    "page": "Ordinary Differential Equations (ODE)",
    "title": "In-Place Updates",
    "category": "section",
    "text": "Defining your ODE function to be in-place updating can have performance benefits. That this means is that, instead of writing a function which outputs its solution, write a function which updates a vector that is designated to hold the solution. By doing this, DifferentialEquations.jl's solver packages are able to reduce the amount of array allocations and achieve better performance.For our example we will use the Lorenz system. What we do is simply write the output to the 3rd input of the function. For example:function lorenz(t,u,du)\n du[1] = 10.0(u[2]-u[1])\n du[2] = u[1]*(28.0-u[3]) - u[2]\n du[3] = u[1]*u[2] - (8/3)*u[3]\nendand then we can use this function in a problem:u0 = [1.0;0.0;0.0]\ntspan = (0.0,1.0)\nprob = ODEProblem(lorenz,u0,tspan)\nsol = solve(prob)(Image: Lorenz System)"
},

{
    "location": "tutorials/ode_example.html#Defining-Systems-of-Equations-Using-ParameterizedFunctions.jl-1",
    "page": "Ordinary Differential Equations (ODE)",
    "title": "Defining Systems of Equations Using ParameterizedFunctions.jl",
    "category": "section",
    "text": "To simplify your life, ParameterizedFunctions.jl provides the @ode_def macro for \"defining your ODE in pseudocode\" and getting a function which is efficient and runnable.To use the macro, you write out your system of equations with the left-hand side being d_ and those variables will be parsed as the independent variables. The dependent variable is t, and the other variables are parameters which you pass at the end. For example, we can write the Lorenz system as:using ParameterizedFunctions\ng = @ode_def LorenzExample begin\n  dx = σ*(y-x)\n  dy = x*(ρ-z) - y\n  dz = x*y - β*z\nend σ=>10.0 ρ=>28.0 β=(8/3)DifferentialEquations.jl will automatically translate this to be exactly the same as f. The result is more legible code with no performance loss. The result is that g is a function which you can now use to define the Lorenz problem.u0 = [1.0;0.0;0.0]\ntspan = (0.0,1.0)\nprob = ODEProblem(g,u0,tspan)Since we used =>, σ and ρ are kept as mutable parameters. For example we can do:g.σ = 11.0to change the value of σ to 11.0. β is not able to be changed since we defined it using =. We can create a new instance with new parameters via the name used in the @ode_def command:h = LorenzExample(σ=11.0,ρ=25.0)Note that the values will default to the values giving in the @ode_def command.One last item to note is that you probably received a warning when defining this:WARNING: Hessian could not invertThis is because the Hessian of the system was not able to be inverted. ParameterizedFunctions.jl does \"behind-the-scenes\" symbolic calculations to pre-compute things like the Jacobian, inverse Jacobian, etc. in order to speedup calculations. Thus not only will this lead to legible ODE definitions, but \"unfairly fast\" code! We can turn off some of the calculations by using a more specific macro. Here, we can turn off the Hessian calculations via @ode_def_nohes. See ParameterizedFunctions.jl for more details.Since the parameters exist within the function, functions defined in this manner can also be used for sensitivity analysis, parameter estimation routines, and bifurcation plotting. This makes DifferentialEquations.jl a full-stop solution for differential equation analysis which also achieves high performance."
},

{
    "location": "tutorials/sde_example.html#",
    "page": "Stochastic Differential Equations (SDE)",
    "title": "Stochastic Differential Equations (SDE)",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/sde_example.html#Stochastic-Differential-Equations-(SDE)-1",
    "page": "Stochastic Differential Equations (SDE)",
    "title": "Stochastic Differential Equations (SDE)",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving SDE. Other introductions can be found by checking out DiffEqTutorials.jl."
},

{
    "location": "tutorials/sde_example.html#Basics-1",
    "page": "Stochastic Differential Equations (SDE)",
    "title": "Basics",
    "category": "section",
    "text": "In this example we will solve the equationdu = f(tu)dt + g(tu)dWwhere f(tu)=u and g(tu)=u. We know via Stochastic Calculus that the solution to this equation is u(tW)=uexp((-frac^22)t+W). To solve this numerically, we define a problem type by giving it the equation and the initial condition:using DifferentialEquations\nα=1\nβ=1\nu₀=1/2\nf(t,u) = α*u\ng(t,u) = β*u\ndt = 1//2^(4)\ntspan = (0.0,1.0)\nprob = SDEProblem(f,g,u₀,(0.0,1.0))The solve interface is then the same as with ODEs. Here we will use the classic Euler-Maruyama algorithm EM and plot the solution:sol = solve(prob,EM(),dt=dt)\nusing Plots; plotly() # Using the Plotly backend\nplot(sol)(Image: Basic Solution)"
},

{
    "location": "tutorials/sde_example.html#Higher-Order-Methods-1",
    "page": "Stochastic Differential Equations (SDE)",
    "title": "Higher Order Methods",
    "category": "section",
    "text": "One unique feature of DifferentialEquations.jl is that higher-order methods for stochastic differential equations are included. For reference, let's also give the SDEProblem the analytical solution. We can do this by making a test problem. This can be  a good way to judge how accurate the algorithms are, or is used to test convergence of the algorithms for methods developers. Thus we define the problem object with:analytic(t,u₀,W) = u₀*exp((α-(β^2)/2)*t+β*W)\nprob = SDETestProblem(f,g,u₀,analytic)and then we pass this information to the solver and plot:#We can plot using the classic Euler-Maruyama algorithm as follows:\nsol =solve(prob,EM(),dt=dt)\nplot(sol,plot_analytic=true)(Image: SDE Solution)We can choose a higher-order solver for a more accurate result:sol =solve(prob,SRIW1(),dt=dt,adaptive=false)\nplot(sol,plot_analytic=true)(Image: Better SDE Solution)By default, the higher order methods have adaptivity. Thus one can usesol =solve(prob,SRIW1())\nplot(sol,plot_analytic=true)(Image: Better Automatic Solution)Here we allowed the solver to automatically determine a starting dt. This estimate at the beginning is conservative (small) to ensure accuracy. We can instead start the method with a larger dt by passing in a value for the starting dt:sol =solve(prob,SRIW1(),dt=dt)\nplot(sol,plot_analytic=true)(Image: Better Automatic Solution)"
},

{
    "location": "tutorials/dae_example.html#",
    "page": "Differential Algebraic Equations (DAE)",
    "title": "Differential Algebraic Equations (DAE)",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/dae_example.html#Differential-Algebraic-Equations-(DAE)-1",
    "page": "Differential Algebraic Equations (DAE)",
    "title": "Differential Algebraic Equations (DAE)",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving DAEs. Other introductions can be found by checking out DiffEqTutorials.jl.In this example we will solve the implicit ODE equationf(tudu) = 0where f is the a variant of the Roberts equation. This equations is actually of the formbeginalign\ndu = f(tu) \n 0 = g(tu) \n endalignor is also known as a constrained differential equation where g is the constraint equation. The Roberts model can be written in the form:beginalign\ndy_1 = -004y + 10^4 y_2 y_3 \ndy_2 = 004 y_1 - 10^4 y_2 y_3 - 3*10^7 y_2^2 \n1 =  y_1  y_2 + y_3 \nendalignwith initial conditions y_1(0) = 1, y_2(0) = 0, y_3(0) = 0, dy_1 = - 004, dy_2 = 004, and dy_3 = 00.The workflow for DAEs is the same as for the other types of equations, where all you need to know is how to define the problem. A DAEProblem is specified by defining an in-place update f(t,u,du,out) which uses the values to mutate out as the output. To makes this into a DAE, we move all of the variables to one side. Thus we can define the function:f = function (t,u,du,out)\n  out[1] = - 0.04u[1]              + 1e4*u[2]*u[3] - du[1]\n  out[2] = + 0.04u[1] - 3e7*u[2]^2 - 1e4*u[2]*u[3] - du[2]\n  out[3] = u[1] + u[2] + u[3] - 1.0\nendwith initial conditonsu₀ = [1.0, 0, 0]\ndu₀ = [-0.04, 0.04, 0.0]\ntspan = (0.0,100000.0)and make the DAEProblem:using DifferentialEquations\nprob = DAEProblem(f,u₀,du₀,tspan)As with the other DifferentialEquations problems, the commands are then to solve and plot. Here we will use the IDA solver from Sundials:sol = solve(prob,IDA())\nusing Plots; plotly() # Using the Plotly backend\nplot(sol)which, despite how interesting the model looks, produces a relatively simple output:(Image: IntroDAEPlot)"
},

{
    "location": "tutorials/fempoisson_example.html#",
    "page": "Poisson Equation Finite Element Method",
    "title": "Poisson Equation Finite Element Method",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/fempoisson_example.html#Poisson-Equation-Finite-Element-Method-1",
    "page": "Poisson Equation Finite Element Method",
    "title": "Poisson Equation Finite Element Method",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving a PDE. Other introductions can be found by checking out DiffEqTutorials.jl.In this example we will solve the Poisson Equation u=f. For our example, we will take the linear equation where f(xy) = sin(2x)cos(2y). For this equation we know that solution is u(xyt)= sin(2x)cos(2y)(8^2) with gradient Du(xy) = cos(2x)cos(2y)(4) -sin(2x)sin(2y)(4). Thus, we define the functions for a PoissonProblem as follows:f(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])\ngD(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])/(8π*π)Or we can use the @fem_def macro to beautify our code. The first argument is the function signature, which here is (x). Second it's a list of variables to convert. This makes more sense in the Heat Equation examples, so we put in the blank expresion () for now. Then we put in our expression, and lastly we define the parameter values. @fem_def will automatically replace x by x[:,1] and y by x[:,2], and will also subtitute in the defined parameters. The previous definition using @fem_def is as follows:f  = @fem_def((x),TestF,begin\n  sin(α.*x).*cos(α.*y)\nend,α=>6.28)\ngD = @fem_def (x) TestgD begin\n  sin(α.*x).*cos(α.*y)/β\nend α=>6.28) β=>79.0The linebreaks are not required but I think it makes it more legible!Here we chose the dirichlet boundary condition gD to give the theoretical solution.  Other example problems can be found in src/examples/exampleProblems.jl. To solve this problem, we first have to generate a mesh. Here we will simply generate a mesh of triangles on the square [0,1]x[0,1] with dx=2^(-5). To do so, we use the code:dx = 1//2^(5)\nmesh = notime_squaremesh([0 1 0 1],dx,:dirichlet)\nprob = PoissonProblem(f,mesh,gD=gD)Note that by specifying :dirichlet our boundary conditions is set on all boundaries to dirichlet. This gives an FEMmesh object which stores a finite element mesh in the same layout as iFEM. Notice this code shows that the package supports the use of rationals in meshes. Other numbers such as floating point and integers can be used as well. Finally, to solve the equation we usesol = solve(prob)solve takes in a mesh and a PoissonProblem and uses the solver to compute the solution. Here the solver was chosen to be GMRES. Other solvers can be found in the documentation. This returns a FEMSolution object which holds data about the solution, such as the solution values (u). To plot the solution, we use the commandusing Plots\nplot(sol)Here is the plot shown against the analytical solution to show the accuracy:(Image: Poisson Example Solution)"
},

{
    "location": "tutorials/femheat_example.html#",
    "page": "Heat Equation Finite Element Method",
    "title": "Heat Equation Finite Element Method",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/femheat_example.html#Heat-Equation-Finite-Element-Method-1",
    "page": "Heat Equation Finite Element Method",
    "title": "Heat Equation Finite Element Method",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving a PDE. Other introductions can be found by checking out DiffEqTutorials.jl.In this example we will solve the heat equation u_t=u+f. To do this, we define a HeatProblem which contains the function f and the boundary conditions. We specify one as follows:f(t,x,u)  = ones(size(x,1)) - .5u\nu0_func(x) = zeros(size(x,1))Here the equation we chose was nonlinear since f depends on the variable u. Thus we specify f=f(u,x,t). If f did not depend on u, then we would specify f=f(x,t). We do need to specify gD (the dirichlet boundary condition) and gN (the neumann boundary condition) since both are zero. u_0 specifies the initial condition. These together give a HeatProblem object which holds everything which specifies a Heat Equation Problem.We then generate a mesh. We will solve the equation on the parabolic cylinder 01^2 times 01. You can think of this as the cube, or at every time point from 0 to 1, the domain is the unit square. To generate this mesh, we use the commandtspan = (0.0,1.0)\ndx = 1//2^(3)\ndt = 1//2^(7)\nmesh = parabolic_squaremesh([0 1 0 1],dx,dt,tspan,:neumann)\nu0 = u0_func(mesh.node)\nprob = HeatProblem(u0,f,mesh)Notice that here we used the mesh to generate our u0 from a function which specifies u0. We then call the solversol = solve(prob,FEMDiffEqHeatImplicitEuler())Here we have chosen to use the ImplicitEuler algorithm to solve the equation. Other algorithms and their descriptions can be found in the solvers part of the documentation."
},

{
    "location": "tutorials/femstochastic_example.html#",
    "page": "Stochastic Finite Element Method",
    "title": "Stochastic Finite Element Method",
    "category": "page",
    "text": ""
},

{
    "location": "tutorials/femstochastic_example.html#Stochastic-Finite-Element-Method-1",
    "page": "Stochastic Finite Element Method",
    "title": "Stochastic Finite Element Method",
    "category": "section",
    "text": "This tutorial will introduce you to the functionality for solving SPDEs. Other introductions can be found by checking out DiffEqTutorials.jl.For most PDE problem types, we can additionally specify them as a stochastic problem by giving the appropriate optional arguments to the constructor. These arguments are a function σ which is the function multiplied to the Brownian increments dW, and stochastic, a boolean which we put as true for when the equation is stochastic. Another keyword that is optional is noisetype which specifies the type of noise (the \"color\" of the noise). By default this is Gaussian (Space-time) White Noise.The following examples show how to change the tutorial problems into stochastic problems."
},

{
    "location": "tutorials/femstochastic_example.html#Finite-Element-Stochastic-Poisson-Equation-1",
    "page": "Stochastic Finite Element Method",
    "title": "Finite Element Stochastic Poisson Equation",
    "category": "section",
    "text": "We can solve the same PDE as in the Poisson Tutorial except as the stochastic PDE,  -u=f+gdW, with additive space-time white noise by specifying the problem as:f(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])\nσ(x) = .01 #Additive noise\ndx = 1//2^(5)\nmesh = notime_squaremesh([0 1 0 1],dx,:dirichlet)\nprob = PoissonProblem(f,mesh,σ=σ)\nsol = solve(prob)This gives the following plot (with adding the deterministic solution from the previous example):(Image: Stochastic Poisson Example Solution)"
},

{
    "location": "tutorials/femstochastic_example.html#Finite-Element-Stochastic-Heat-Equation-1",
    "page": "Stochastic Finite Element Method",
    "title": "Finite Element Stochastic Heat Equation",
    "category": "section",
    "text": "This will solve a nonlinear stochastic heat equation u_t=Δu+f+gdW with forcing function f(u)=.5-u, noise function g(u)=100u^2 and initial condition u0=0. We would expect this system to rise towards the deterministic steady state u=2 (but stay in mean a bit below it due to 1st order \"Milstein\" effects), gaining more noise as it increases. This is specified as follows:f(t,x,u)  = ones(size(x,1)) - .5u\nu0_func(x) = zeros(size(x,1))\nσ(t,x,u) = 1u.^2\ntspan = (0.0,5.0)\ndx = 1//2^(3)\ndt = 1//2^(11)\nmesh = parabolic_squaremesh([0 1 0 1],dx,dt,tspan,:neumann)\nu0 = u0_func(mesh.node)\nprob = HeatProblem(u0,f,mesh,σ=σ)We use the following code create an animation of the solution:sol = solve(prob,FEMDiffEqHeatEuler(),save_timeseries=true,solver=:LU)\nusing Plots\nanimate(sol;zlim=(0,3),cbar=false)(Image: Stochastic Heat Solution)"
},

{
    "location": "basics/overview.html#",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Overview of DifferentialEquations.jl",
    "category": "page",
    "text": ""
},

{
    "location": "basics/overview.html#Overview-of-DifferentialEquations.jl-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Overview of DifferentialEquations.jl",
    "category": "section",
    "text": "The general workflow for using the package is as follows:Define a problem\nSolve the problem\nAnalyze the output"
},

{
    "location": "basics/overview.html#Defining-Problems-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Defining Problems",
    "category": "section",
    "text": "Problems are specified via a type interface. The problem types are designed to contained the necessary information to fully define their associated differential equation. Each problem type has a page explaining their problem type and the special features associated with them. For example, an ordinary differential equation is defined byfracdudt = f(tu)over some time interval tspan with some initial condition u0, and therefore the ODEProblem is defined by those components:prob = ODEProblem(f,u0,tspan)Note that the number types in the solution will match the types you designate in the problem. For example, if one uses Rational{BigInt} for specifying the timespan and BigFloat for specifying the initial condition, then the solution will solve using Rational{BigInt} for the timesteps and BigFloat for the independent variables. A wide variety of number types are compatible with the solvers such as complex numbers, unitful numbers (via Unitful.jl), decimals (via DecFP), Dual numbers, and many more which may not have been tested yet (thanks to the power of multiple dispatch!). For information on type-compatibilty, please see the solver pages for the specific problems."
},

{
    "location": "basics/overview.html#Solving-the-Problems-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Solving the Problems",
    "category": "section",
    "text": "Each type of differential equation has its own problem type which allows the solvers to dispatch to the right methods. The common interface for calling the solvers is:sol = solve(prob,alg;kwargs)Into the command, one passes the differential equation problem that they defined prob, optionally choose an algorithm alg (a default is given if not chosen), and change the properties of the solver using keyword arguments. The common arguments which are accepted by most methods is defined in the common solver options manual page. The solver returns a solution object sol which hold all of the details for the solution."
},

{
    "location": "basics/overview.html#Analyzing-the-Solution-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Analyzing the Solution",
    "category": "section",
    "text": "With the solution object, you do the analysis as you please! The solution type has a common interface which makes handling the solution similar between the different types of differential equations. Tools such as interpolations are seamlessly built into the solution interface to make analysis easy. This interface is described in the solution handling manual page.Plotting functionality is provided by a recipe to Plots.jl. To use plot solutions, simply call the plot(sol) and the plotter will generate appropriate plots. If save_timeseries was used, the plotters can generate animations of the solutions to evolution equations using the animate(sol) command. Plots can be customized using all of the keyword arguments provided by Plots.jl. Please see Plots.jl's documentation for more information."
},

{
    "location": "basics/overview.html#Add-on-Tools-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Add-on Tools",
    "category": "section",
    "text": "One of the most compelling features of DifferentialEquations.jl is that the common solver interface allows one to build tools which are \"algorithm and problem agnostic\". For example, one of the provided tools allows for performing parameter estimation on ODEProblems. Since the solve interface is the same for the different algorithms, one can use any of the associated solving algorithms. This modular structure allows one to mix and match overarching analysis tools with specialized algorithms to one's problem, leading to high performance with a large feature base. Isn't that the promise of Julia just being fulfilled?"
},

{
    "location": "basics/overview.html#Development-and-Testing-Tools-1",
    "page": "Overview of DifferentialEquations.jl",
    "title": "Development and Testing Tools",
    "category": "section",
    "text": "Lastly, one unique feature of DifferentialEquations.jl is the existence of algorithm development and testing functionality. This suite was designed by researchers in the field of numerical differential equations to both try out new ideas and distribute finalized results to large audiences. The tools for algorithm development allow for easy convergence testing, benchmarking, and higher order analysis (stability plotting, etc.). This is one of the reasons why DifferentialEquations.jl contains many algorithms which are unique and the results of recent publications! Please check out the developer documentation for more information on using the development tools.Note that DifferentialEquations.jl allows for distributed development, meaning that algorithms which \"plug-into ecosystem\" don't have to be a part of the major packages. If you are interested in adding your work to the ecosystem, checkout the developer documentation for more information."
},

{
    "location": "basics/common_solver_opts.html#",
    "page": "Common Solver Options",
    "title": "Common Solver Options",
    "category": "page",
    "text": ""
},

{
    "location": "basics/common_solver_opts.html#Common-Solver-Options-1",
    "page": "Common Solver Options",
    "title": "Common Solver Options",
    "category": "section",
    "text": "The DifferentialEquations.jl universe has a large set of common arguments available for the solve function. These arguments apply to solve on any problem type and are only limited by limitations of the specific implementations.Many of the defaults depend on the algorithm or the package the algorithm derives from. Not all of the interface is provided by every algorithm. For more detailed information on the defaults and the available options for specific algorithms / packages, see the manual pages for the solvers of specific problems."
},

{
    "location": "basics/common_solver_opts.html#Default-Algorithm-Hinting-1",
    "page": "Common Solver Options",
    "title": "Default Algorithm Hinting",
    "category": "section",
    "text": "To help choose the default algorithm, the keyword argument alg_hints is provided. alg_hints is a Vector{Symbol} which describe the problem at a high level to the solver. The options are::nonstiff - Denotes the equation as nonstiff.\n:stiff - Denotes the equation as stiff.Currently unused options include::interpolant - Denotes that a high-precision interpolation is important.\n:memorybound - Denotes that the solver will be memory bound.This functionality is derived via the benchmarks in DiffEqBenchmarks.jl and is under active development."
},

{
    "location": "basics/common_solver_opts.html#Output-Control-1",
    "page": "Common Solver Options",
    "title": "Output Control",
    "category": "section",
    "text": "These arguments control the output behavior the solvers. It defaults to maximum output to give the best interactive user experience, but can be reduced all the way to only saving the solution at the final timepoint. All of these options can be mixed and matched. For example, the combinationsaveat=[0:1/4:1],save_timeseries=false,dense=falsewill only save the solution at the timepoints 0:1/4:1 and no other locations. For more examples for controlling the output behavior, see the Output Specification manual page.dense: Denotes whether to save the extra pieces for dense (continuous) output. Default is true for algorithms which have the ability to produce dense output.\nsaveat: Denotes extra times to save the solution at during the solving phase. The solver will save at each of the timepoints in this array in the most efficient manner. Note that this can be used even if dense=false. For methods where interpolation is not possible, this may be equivalent to tstops. Default is [].\ntstops: Denotes extra times that the timestepping algorithm must step to. This should be used to help the solver deal with discontinuities and singularities, since stepping exactly at the time of the discontinuity will improve accuracy. If a method cannot change timesteps (fixed timestep multistep methods), then tstops will use an interpolation, matching the behavior of saveat. If a method cannot change timesteps and also cannot interpolation, then tstops must be a multiple of dt or elese an error will be thrown. Default is [].\ncalck: Turns on and off the internal ability for intermediate     interpolations. This defaults to dense || !isempty(saveat) || \"no custom callback is given\". This can be used to turn off interpolations (to save memory) if one isn't using interpolations when a custom callback is used. Another case where this may be used is to turn on interpolations for usage in the integrator interface even when interpolations are used no  where else. Note that this is only required if the algorithm doesn't have a free or lazy interpolation (DP8()).\nsave_timeseries: Saves the result at every timeseries_steps iteration.     Default is true.\ntimeseries_steps: Denotes how many steps between saving a value for the timeseries. Defaults to 1."
},

{
    "location": "basics/common_solver_opts.html#Stepsize-Control-1",
    "page": "Common Solver Options",
    "title": "Stepsize Control",
    "category": "section",
    "text": "These arguments control the timestepping routines.adaptive: Turns on adaptive timestepping for appropriate methods. Default is true.\nabstol: Absolute tolerance in adaptive timestepping. Defaults to 1e-3.\nreltol: Relative tolerance in adaptive timestepping. Defaults to 1e-6.\ndt: Sets the initial stepsize. This is also the stepsize for fixed timestep methods. Defaults to an automatic choice.\ninternalnorm: The norm function internalnorm(u) which error estimates are calculated. Defaults are package-dependent.\ngamma: The risk-factor γ in the q equation for adaptive timestepping. Default is algorithm dependent.\ndtmax: Maximum dt for adaptive timestepping. Defaults are package-dependent.\ndtmin: Minimum dt for adaptive timestepping. Defaults are package-dependent.\nbeta1: The Lund stabilization α parameter. Defaults are algorithm-dependent.\nbeta2: The Lund stabilization β parameter. Defaults are algorithm-dependent.\nqmax: Defines the maximum value possible for the adaptive q. Defaults are algorithm-dependent.\nqmin: Defines the maximum value possible for the adaptive q. Defaults are algorithm-dependent.\nqoldinit: The initial qold in stabilization stepping. Defaults are algorithm-dependent."
},

{
    "location": "basics/common_solver_opts.html#Fixed-Stepsize-Usage-1",
    "page": "Common Solver Options",
    "title": "Fixed Stepsize Usage",
    "category": "section",
    "text": "Note that if a method does not have adaptivity, the following rules apply:If dt is set, then the algorithm will step with size dt each iteration.\nIf tstops and dt are both set, then the algorithm will step with either a size dt, or use a smaller step to hit the tstops point.\nIf tstops is set without dt, then the algorithm will step directly to each value in tstops\nIf neither dt nor tstops are set, the solver will throw an error."
},

{
    "location": "basics/common_solver_opts.html#Miscellaneous-1",
    "page": "Common Solver Options",
    "title": "Miscellaneous",
    "category": "section",
    "text": "maxiters: Maximum number of iterations before stopping. Defaults to 1e5.\ncallback: Specifies a callback. Defaults to a callback function which performs the saving routine. For more information, see the Event Handling and Callback Functions manual page.\nisoutofdomain: Specifies a function isoutofdomain(t,u) where, when it returns false, it will reject the timestep. Defaults to always false."
},

{
    "location": "basics/common_solver_opts.html#Progress-Monitoring-1",
    "page": "Common Solver Options",
    "title": "Progress Monitoring",
    "category": "section",
    "text": "These arguments control the usage of the progressbar in the Juno IDE.progress: Turns on/off the Juno progressbar. Default is false.\nprogress_steps: Numbers of steps between updates of the progress bar. Default is 1000.\nprogress_name: Controls the name of the progressbar. Default is the name of the problem type.\nprogress_message: Controls the message with the progressbar. Defaults to showing dt, t, the maximum of u."
},

{
    "location": "basics/common_solver_opts.html#User-Data-1",
    "page": "Common Solver Options",
    "title": "User Data",
    "category": "section",
    "text": "userdata: This is a user-chosen type which will show up in the integrator type, allowing the user to have a cache for callbacks, event handling, and other various activities."
},

{
    "location": "basics/common_solver_opts.html#Error-Calculations-1",
    "page": "Common Solver Options",
    "title": "Error Calculations",
    "category": "section",
    "text": "If you are using the test problems (ex: ODETestProblem), then the following options control the errors which are calculated:timeseries_errors: Turns on and off the calculation of errors at the steps which were taken, such as the l2 error. Default is true.\ndense_errors: Turns on and off the calculation of errors at the steps which require dense output and calculate the error at 100 evenly-spaced points throughout tspan. An example is the L2 error. Default is false."
},

{
    "location": "basics/solution.html#",
    "page": "Solution Handling",
    "title": "Solution Handling",
    "category": "page",
    "text": ""
},

{
    "location": "basics/solution.html#Solution-Handling-1",
    "page": "Solution Handling",
    "title": "Solution Handling",
    "category": "section",
    "text": ""
},

{
    "location": "basics/solution.html#Accessing-the-Values-1",
    "page": "Solution Handling",
    "title": "Accessing the Values",
    "category": "section",
    "text": "The solution type has a lot of built in functionality to help analysis. For example, it has an array interface for accessing the values. Internally, the solution type has two important fields:u which holds the Vector of values at each timestep\nt which holds the times of each timestep.Different solution types may add extra information as necessary, such as the derivative at each timestep du or the spatial discretization x, y, etc.Instead of working on the Vector{uType} directly, we can use the provided array interface.sol[i]to access the value at timestep i (if the timeseres was saved), andsol.t[i]to access the value of t at timestep i. For multi-dimensional systems, this will address first by time and secondly by component, and thussol[i,j]will be the jth component at timestep i. If the independent variables had shape (for example, was a matrix), then j is the linear index. We can also access solutions with shape:sol[i,j,k]gives the [j,k] component of the system at timestep i. The colon operator is supported, meaning thatsol[:,j]gives the timeseries for the jth component.If the solver allows for dense output and dense=true was set for the solving (which is the default), then we can access the approximate value at a time t using the commandsol(t)Note that the interpolating function allows for t to be a vector and use this to speedup the interpolation calculations.The solver interface also gives tools for using comprehensions over the solution. Using the tuples(sol) function, we can get a tuple for the output at each timestep. This allows one to do the following:[t+2u for (t,u) in tuples(sol)]One can use the extra components of the solution object as well using zip. For example, say the solution type holds du, the derivative at each timestep. One can comprehend over the values using:[t+3u-du for (t,u,du) in zip(sol.t,sol.u,sol.du)]Note that the solution object acts as a vector in time, and so its length is the number of saved timepoints."
},

{
    "location": "basics/solution.html#Special-Fields-1",
    "page": "Solution Handling",
    "title": "Special Fields",
    "category": "section",
    "text": "The solution interface also includes some special fields. The problem object prob and the algorithm used to solve the problem alg are included in the solution. Additionally, the field dense is a boolean which states whether the interpolation functionality is available. Lastly, there is a mutable state tslocation which controls the plot recipe behavior. By default, tslocation=0. Its values have different meanings between partial and ordinary differntial equations:tslocation=0  for non-spatial problems (ODEs) means that the plot recipe will plot the full solution. tslocation=i means that it will only plot the timepoint i.\ntslocation=0 for spatial problems (PDEs) means the plot recipe will plot the final timepoint. tslocation=i means that the plot recipe will plot the ith timepoint.What this means is that for ODEs, the plots will default to the full plot and PDEs will default to plotting the surface at the final timepoint. The iterator interface simply iterates the value of tslocation, and the animate function iterates the solution calling solve at each step."
},

{
    "location": "basics/solution.html#Problem-Specific-Features-1",
    "page": "Solution Handling",
    "title": "Problem-Specific Features",
    "category": "section",
    "text": "Extra fields for solutions of specific problems are specified in the appropriate problem definition page.  "
},

{
    "location": "basics/plot.html#",
    "page": "Plot Functions",
    "title": "Plot Functions",
    "category": "page",
    "text": ""
},

{
    "location": "basics/plot.html#Plot-Functions-1",
    "page": "Plot Functions",
    "title": "Plot Functions",
    "category": "section",
    "text": ""
},

{
    "location": "basics/plot.html#Standard-Plots-1",
    "page": "Plot Functions",
    "title": "Standard Plots",
    "category": "section",
    "text": "Plotting functionality is provided by recipes to Plots.jl. To use plot solutions, simply call the plot(type) after importing Plots.jl and the plotter will generate appropriate plots.using Plots\nplot(sol) # Plots the solutionMany of the types defined in the DiffEq universe, such as ODESolution, ConvergenceSimulation WorkPrecision, etc. have plot recipes to handle the default plotting behavior. Plots can be customized using all of the keyword arguments provided by Plots.jl. For example, we can change the plotting backend to the GR package and put a title on the plot by doing:gr()\nplot(sol,title=\"I Love DiffEqs!\")"
},

{
    "location": "basics/plot.html#Density-1",
    "page": "Plot Functions",
    "title": "Density",
    "category": "section",
    "text": "If the problem was solved with dense=true, then denseplot controls whether to use the dense function for generating the plot, and plotdensity is the number of evenly-spaced points (in time) to plot. For example:plot(sol,denseplot=false)means \"only plot the points which the solver stepped to\", whileplot(sol,plotdensity=1000)means to plot 1000 points using the dense function (since denseplot=true by default)"
},

{
    "location": "basics/plot.html#Choosing-Variables-1",
    "page": "Plot Functions",
    "title": "Choosing Variables",
    "category": "section",
    "text": "In the plot command, one can choose the variables to be plotted in each plot. The master form is:vars = [(0,1), (1,3), (4,5)]where this would mean plot variable 0 vs 1, 1 vs 3, and 4 vs 5 all on the same graph (0 is considered to be time, or the independent variable). While this can be used for everything, the following conveniences are provided:Everywhere in a tuple position where we only find an integer, this variable is plotted as a function of time.  For example, the list above is equivalent to:vars = [1, (1,3), (4,5)]andvars = [1, 3, 4]is the most concise way to plot the variables 1, 3, and 4 as a function of time.It is possible to omit the list if only one plot is wanted: (2,3) and 4 are respectively equivalent to [(2,3)] and [(0,4)].\nA tuple containing one or several lists will be expanded by associating corresponding elements of the lists with each other:vars = ([1,2,3], [4,5,6])is equivalent tovars = [(1,4), (2,5), (3,6)]andvars = (1, [2,3,4])is equivalent tovars = [(1,2), (1,3), (1,4)]Instead of using integers, one can use the symbols from a ParameterizedFunction. For example, vars=(:x,:y) will replace the symbols with the integer values for components :x and :y .\nn-dimensional groupings are allowed. For example, (1,2,3,4,5) would be a 5-dimensional plot between the associated variables."
},

{
    "location": "basics/plot.html#Example-1",
    "page": "Plot Functions",
    "title": "Example",
    "category": "section",
    "text": "using DifferentialEquations, Plots\nlorenz = @ode_def Lorenz begin\n  dx = σ*(y-x)\n  dy = ρ*x-y-x*z\n  dz = x*y-β*z\nend σ = 10. β = 8./3. ρ => 28.\n\nu0 = [1., 5., 10.]\ntspan = (0., 100.)\nprob = ODEProblem(lorenz, u0, tspan)\nsol = solve(prob)\n\nxyzt = plot(sol, plotdensity=10000,lw=1.5)\nxy = plot(sol, plotdensity=10000, vars=(:x,:y))\nxz = plot(sol, plotdensity=10000, vars=(:x,:z))\nyz = plot(sol, plotdensity=10000, vars=(:y,:z))\nxyz = plot(sol, plotdensity=10000, vars=(:x,:y,:z))\nplot(plot(xyzt,xyz),plot(xy, xz, yz, layout=(1,3),w=1), layout=(2,1))(Image: lorenz_plot)"
},

{
    "location": "basics/plot.html#Animations-1",
    "page": "Plot Functions",
    "title": "Animations",
    "category": "section",
    "text": "Using the iterator interface over the solutions, animations can also be generated via the animate(sol) command. One can choose the filename to save to via animate(sol,filename), while the frames per second fps and the density of steps to show every can be specified via keyword arguments. The rest of the arguments will be directly passed to the plot recipe to be handled as normal. For example, we can animate our solution with a larger line-width which saves every 4th frame via:animate(sol,lw=3,every=4)Please see Plots.jl's documentation for more information on the available attributes."
},

{
    "location": "basics/integrator.html#",
    "page": "Integrator Interface (Experimental Preview)",
    "title": "Integrator Interface (Experimental Preview)",
    "category": "page",
    "text": ""
},

{
    "location": "basics/integrator.html#Integrator-Interface-(Experimental-Preview)-1",
    "page": "Integrator Interface (Experimental Preview)",
    "title": "Integrator Interface (Experimental Preview)",
    "category": "section",
    "text": "The integrator interface gives one the ability to interactively step through the numerical solving of a differential equation. Through this interface, one can easily monitor results, modify the problem during a run, and dynamically continue solving as one sees fit.Note: this is currently only offered by OrdinaryDiffEq.jl. It is currently an \"experimental preview\" which requires one be on the master branches of both OrdinaryDiffEq.jl and DiffEqBase.jl. We hope to bring this interface to other packages like Sundials.jl as well."
},

{
    "location": "basics/integrator.html#Initialization-and-Stepping-1",
    "page": "Integrator Interface (Experimental Preview)",
    "title": "Initialization and Stepping",
    "category": "section",
    "text": "To initialize an integrator, use the syntax:integrator = init(prob,alg;kwargs...)The keyword args which are accepted are the same Common Solver Options used by solve. The type which is returned is the integrator. One can manually choose to step via the step! command:step!(integrator)which will take one successful step. This type also implements an interator interface, and so one can step n times (or to the last tstop) using the take iterator:for i in take(integrator,n) endOne can loop to the end by using solve!(integrator) or using the interator interface:for i in integrator endIn addition, some helper iterators are provided to help monitor the solution. For example, the tuples iterators let's you view the valuesfor (t,u) in tuples(integrator)\n  @show t,u\nendand the intervals iterator lets you view the full interval:for (tprev,uprev,t,u) in intervals(integrator)\n  @show tprev,t\nendLastly, one can dynamically control the \"endpoint\". The initialization simply makes prob.tspan[2] the last value of tstop, and many of the iterators are made to stop at the final tstop value. However, step! will always take a step, and one can dynamically add new values of tstops by modifiying the variable in the options field: push!(integrator.opts.tstops,new_t)."
},

{
    "location": "basics/integrator.html#Handing-Integrators-1",
    "page": "Integrator Interface (Experimental Preview)",
    "title": "Handing Integrators",
    "category": "section",
    "text": "The integrator type holds all of the information for the intermediate solution of the differential equation. Useful fields are:t - time of the proposed step\nu - value at the proposed step\nuserdata - user-provided data type\nopts - common solver options\nalg - the algorithm associated with the solution\nf - the function being solved\nsol - the current state of the solution\ntprev - the last timepoint\nuprev - the value at the last timepointThe userdata is the type which is provided by the user as a keyword arg in init. opts holds all of the common solver options, and can be mutated to change the solver characteristics. For example, to modify the absolute tolerance for the future timesteps, one can do:integrator.opts.abstol = 1e-9The sol field holds the current solution. This current solution includes the interpolation function if available, and thus integrator.sol(t) lets one interpolate efficiently over the whole current solution. Additionally, a a \"current interval interpolation function\" is provided on the integrator type via integrator(t). This uses only the solver information from the interval [tprev,t] to compute the interpolation, and is allowed to extrapolate beyond that interval."
},

{
    "location": "basics/integrator.html#Note-about-mutating-1",
    "page": "Integrator Interface (Experimental Preview)",
    "title": "Note about mutating",
    "category": "section",
    "text": "Be cautious: one should not directly mutate the t and u fields of the integrator. Doing so will destroy the accuracy of the interpolator and can harm certain algorithms. Instead if one wants to introduce discontinuous changes, one should use the Event Handling and Callback Functions. Modifications within a callback affect! surrounded by saves provides an error-free handling of the discontinuity."
},

{
    "location": "basics/integrator.html#Integrator-vs-Solution-1",
    "page": "Integrator Interface (Experimental Preview)",
    "title": "Integrator vs Solution",
    "category": "section",
    "text": "The integrator and the solution have very different actions because they have very different meanings. The Solution type is a type with history: it stores all of the (requested) timepoints and interpolates/acts using the values closest in time. On the otherhand, the Integrator type is a local object. It only knows the times of the interval it currently spans, the current caches and values, and the current state of the solver (the current options, tolerances, etc.). These serve very different purposes:The integrator's interpolation can extrapolate, both forward and backward in in time. This is used to estimate events and is internally used for predictions.\nThe integrator is fully mutable upon iteration. This means that every time an iterator affect is used, it will take timesteps from the current time. This means that first(integrator)!=first(integrator) since the integrator will step once to evaluate the left and then step once more (not backtracking). This allows the iterator to keep dynamically stepping, though one should note that it may violate some immutablity assumptions commonly made about iterators.If one wants the solution object, then one can find it in integrator.sol."
},

{
    "location": "basics/integrator.html#Function-Interface-1",
    "page": "Integrator Interface (Experimental Preview)",
    "title": "Function Interface",
    "category": "section",
    "text": "In addition to the type interface, a function interface is provided which allows for safe modifications of the integrator type, and allows for uniform usage throughout the ecosystem (for packages/algorithms which implement the functions). The following functions make up the interface:u_modified!(integrator,bool): Bool which states whether a change to u occured, allowing the solver to handle the discontinuity.\nsavevalues!(integrator): Adds the current state to the sol.\nmodify_proposed_dt(integrator,factor):  Multiplies the proposed dt for the next timestep by the scaling factor.\nproposed_dt(integrator): Returns the dt of the proposed step\ncache_iter(integrator):  Returns an iterator over the cache arrays of the method. This can be used to change internal values as needed.\nresize!(integrator,k): Resizes the ODE to a size k. This chops off the end of the array, or adds blank values at the end, depending on whether k>length(integrator.u).\nterminate!(integrator): Terminates the integrator by emptying tstops. This can be used in events and callbacks to immediately end the solution process.\ndeleteat!(integrator,k): Shrinks the ODE by deleting the ith component.\nget_du(integrator): Returns the derivative at t.\nchange_t_via_interpolation(integrator,t,modify_save_endpoint=Val{false}): this option lets one modify the current t and changes all of the corresponding values using the local interpolation. If the current solution has already been saved, one can provide the optional value modify_save_endpoint to also modify the endpoint of sol in the same manner.Note that not all of these functions will be implemented for every algorithm. Some have hard limitations. For example, Sundials.jl cannot resize problems. When a function is not limited, an error will be thrown."
},

{
    "location": "basics/integrator.html#Additional-Options-1",
    "page": "Integrator Interface (Experimental Preview)",
    "title": "Additional Options",
    "category": "section",
    "text": "The following options can additionally be specified in init (or be mutated in the opts) for further control of the integrator:advance_to_tstop: This makes step! continue to the next value in tstop.\nstop_at_next_tstop: This forces the iterators to stop at the next value of tstop.For example, if one wants to iterate but only stop at specific values, one can choose:integrator = init(prob,Tsit5();dt=1//2^(4),tstops=[0.5],advance_to_tstop=true)\nfor (t,u) in tuples(integrator)\n  @test t ∈ [0.5,1.0]\nendwhich will only enter the loop body at the values in tstops (here, prob.tspan[2]==1.0 and thus there are two values of tstops which are hit). Addtionally, one can solve! only to 0.5 via:integrator = init(prob,Tsit5();dt=1//2^(4),tstops=[0.5])\nintegrator.opts.stop_at_next_tstop = true\nsolve!(integrator)"
},

{
    "location": "basics/integrator.html#Plot-Recipe-1",
    "page": "Integrator Interface (Experimental Preview)",
    "title": "Plot Recipe",
    "category": "section",
    "text": "Like the Solution type, a plot recipe is provided for the Integrator type. Since the Integrator type is a local state type on the current interval, plot(integrator) returns the solution on the current interval. The same options for the plot recipe are provided as for sol, meaning one can choose variables via the vars keyword argument, or change the plotdensity / turn on/off denseplot.Additionally, since the integrator is an integrator, this can be used in the Plots.jl animate command to iteratively build an animation of the solution while solving the differentiation equation.For an example of manually chaining together the iterator interface and plotting, one should try the following:using DifferentialEquations, DiffEqProblemLibrary, Plots\nprob = prob_ode_linear\n\nusing Plots\nintegrator = init(prob,Tsit5();dt=1//2^(4),tstops=[0.5])\npyplot(show=true)\nplot(integrator)\nfor i in integrator\n  display(plot!(integrator,vars=(0,1),legend=false))\nend\nstep!(integrator); plot!(integrator,vars=(0,1),legend=false)\nsavefig(\"iteratorplot.png\")(Image: Iterator Plot)"
},

{
    "location": "types/ode_types.html#",
    "page": "ODE Types",
    "title": "ODE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/ode_types.html#ODE-Types-1",
    "page": "ODE Types",
    "title": "ODE Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/ode_types.html#Mathematical-Specification-of-an-ODE-Problem-1",
    "page": "ODE Types",
    "title": "Mathematical Specification of an ODE Problem",
    "category": "section",
    "text": "To define an ODE Problem, you simply need to give the function f and the initial condition u which define an ODEfracdudt = f(tu)f should be specified as f(t,u) (or in-place as f(t,u,du)),and u₀ should be an AbstractArray (or number) whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀, one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well."
},

{
    "location": "types/ode_types.html#Problem-Type-1",
    "page": "ODE Types",
    "title": "Problem Type",
    "category": "section",
    "text": ""
},

{
    "location": "types/ode_types.html#Constructors-1",
    "page": "ODE Types",
    "title": "Constructors",
    "category": "section",
    "text": "ODEProblem(f,u0,tspan) : Defines the ODE with the specified functions."
},

{
    "location": "types/ode_types.html#Fields-1",
    "page": "ODE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The function in the ODE.\nu0: The initial condition.\ntspan: The timespan for the problem."
},

{
    "location": "types/ode_types.html#Special-Solver-Options-1",
    "page": "ODE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/ode_types.html#Special-Solution-Fields-1",
    "page": "ODE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": ""
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_linear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_linear",
    "category": "Constant",
    "text": "Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith Float64s\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_2Dlinear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_2Dlinear",
    "category": "Constant",
    "text": "4x2 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith Float64s\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_bigfloatlinear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_bigfloatlinear",
    "category": "Constant",
    "text": "Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith BigFloats\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_bigfloat2Dlinear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_bigfloat2Dlinear",
    "category": "Constant",
    "text": "4x2 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith BigFloats\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_large2Dlinear",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_large2Dlinear",
    "category": "Constant",
    "text": "100x100 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\nwith Float64s\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_2Dlinear_notinplace",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_2Dlinear_notinplace",
    "category": "Constant",
    "text": "4x2 version of the Linear ODE\n\nfracdudt = u\n\nwith initial condition u0=12, =101, and solution\n\nu(t) = u0e^t\n\non Float64. Purposefully not in-place as a test.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_threebody",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_threebody",
    "category": "Constant",
    "text": "The ThreeBody problem as written by Hairer:\n\nbeginalign\ny = y + 2y - fracy+D - fracy-D \ny = y - 2y - fracyD - fracyD \nD = ((y+)^2 + y^2)^32 \nD = ((y-)^2+y^2)^32 \n = 0012277471 \n =1-\nendalign\n\nFrom Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 129\n\nUsually solved on t₀ = 0.0; T = parse(BigFloat,\"17.0652165601579625588917206249\") Periodic with that setup.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_pleides",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_pleides",
    "category": "Constant",
    "text": "Pleides Problem\n\nbeginalign\nx = sum_ji m(x-x)r \ny = sum_ji m(y-y)r\nendalign\n\nwhere\n\nr = ((x-x)^2 + (y-y)^2)^32\n\nand inital condtions are\n\nbeginalign\nx(0)=3  \nx(0)=3  \nx(0)=-1  \nx(0)=-3  \nx(0)=2  \nx(0)=-2  \nx(0)=2  \ny(0)=3  \ny(0)=-3  \ny(0)=2  \ny(0)=0  \ny(0)=0  \ny(0)=-4  \ny(0)=4\nendalign\n\nand with x(0)=y(0)=0 except for\n\nbeginalign\nx(0)=175 \nx(0)=-15 \ny(0)=-125 \ny(0)=1\nendalign\n\nFrom Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 244\n\nUsually solved from 0 to 3.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_vanderpol",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_vanderpol",
    "category": "Constant",
    "text": "Van der Pol Equations\n\nbeginalign\nfracdxdt = y \nfracdydt = (1-x^2)y -x\nendalign\n\nwith =10 and u0=0sqrt3\n\nNon-stiff parameters.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_vanderpol_stiff",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_vanderpol_stiff",
    "category": "Constant",
    "text": "Van der Pol Equations\n\nbeginalign\nfracdxdt = y \nfracdydt = (1-x^2)y -x\nendalign\n\nwith =10^6 and u0=0sqrt3\n\nStiff parameters.\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_rober",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_rober",
    "category": "Constant",
    "text": "The Robertson biochemical reactions:\n\nbeginalign\nfracdydt = -ky+kyy  \nfracdydt =  ky-ky^2-kyy \nfracdydt =  ky^2\nendalign\n\nwhere k=004, k=3times10^7, k=10^4. For details, see:\n\nHairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 129\n\nUsually solved on [0,1e11]\n\n\n\n"
},

{
    "location": "types/ode_types.html#DiffEqProblemLibrary.prob_ode_rigidbody",
    "page": "ODE Types",
    "title": "DiffEqProblemLibrary.prob_ode_rigidbody",
    "category": "Constant",
    "text": "Rigid Body Equations\n\nbeginalign\nfracdydt  = Iyy \nfracdydt  = Iyy \nfracdydt  = Iyy\nendalign\n\nwith I=-2, I=125, and I=-12.\n\nThe initial condition is y=100009.\n\nFrom Solving Differential Equations in R by Karline Soetaert\n\nor Hairer Norsett Wanner Solving Ordinary Differential Euations I - Nonstiff Problems Page 244\n\nUsually solved from 0 to 20.\n\n\n\n"
},

{
    "location": "types/ode_types.html#Example-Problems-1",
    "page": "ODE Types",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in DiffEqProblemLibrary.jl.To use a sample problem, such as prob_ode_linear, you can do something like:# Pkg.add(\"DiffEqProblemLibrary\")\nusing DiffEqProblemLibrary\nprob = prob_ode_linear\nsol = solve(prob)DiffEqProblemLibrary.prob_ode_linear\nDiffEqProblemLibrary.prob_ode_2Dlinear\nDiffEqProblemLibrary.prob_ode_bigfloatlinear\nDiffEqProblemLibrary.prob_ode_bigfloat2Dlinear\nDiffEqProblemLibrary.prob_ode_large2Dlinear\nDiffEqProblemLibrary.prob_ode_2Dlinear_notinplace\nDiffEqProblemLibrary.prob_ode_threebody\nDiffEqProblemLibrary.prob_ode_pleides\nDiffEqProblemLibrary.prob_ode_vanderpol\nDiffEqProblemLibrary.prob_ode_vanderpol_stiff\nDiffEqProblemLibrary.prob_ode_rober\nDiffEqProblemLibrary.prob_ode_rigidbody"
},

{
    "location": "types/sde_types.html#",
    "page": "SDE Types",
    "title": "SDE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/sde_types.html#SDE-Types-1",
    "page": "SDE Types",
    "title": "SDE Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/sde_types.html#Mathematical-Specification-of-a-SDE-Problem-1",
    "page": "SDE Types",
    "title": "Mathematical Specification of a SDE Problem",
    "category": "section",
    "text": "To define an SDE Problem, you simply need to give the forcing function f, the noise function g, and the initial condition u which define an SDEdu = f(tu)dt + g(tu)dWf and g should be specified as f(t,u) and  g(t,u) respectively, and u₀ should be an AbstractArray whose geometry matches the desired geometry of u. Note that we are not limited to numbers or vectors for u₀, one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well. A vector of gs can also be defined to determine an SDE of higher Ito dimension."
},

{
    "location": "types/sde_types.html#Problem-Type-1",
    "page": "SDE Types",
    "title": "Problem Type",
    "category": "section",
    "text": "Wraps the data which defines an SDE problemu = f(ut)dt + g(ut)dWwith initial condition u0."
},

{
    "location": "types/sde_types.html#Constructors-1",
    "page": "SDE Types",
    "title": "Constructors",
    "category": "section",
    "text": "SDEProblem(f,g,u0,tspan,noise=WHITE_NOISE) : Defines the SDE with the specified functions. The default noise is WHITE_NOISE."
},

{
    "location": "types/sde_types.html#Fields-1",
    "page": "SDE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The drift function in the SDE.\ng: The noise function in the SDE.\nu0: The initial condition.\ntspan: The timespan for the problem.\nnoise: The noise process applied to the noise upon generation."
},

{
    "location": "types/sde_types.html#Noise-Processes-1",
    "page": "SDE Types",
    "title": "Noise Processes",
    "category": "section",
    "text": ""
},

{
    "location": "types/sde_types.html#Special-Solver-Options-1",
    "page": "SDE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/sde_types.html#Special-Solution-Fields-1",
    "page": "SDE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": ""
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_linear",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_linear",
    "category": "Constant",
    "text": "du_t = udt + udW_t\n\nwhere β=1.01, α=0.87, and initial condtion u0=1/2, with solution\n\nu(tu0W_t)=u0exp((-frac^22)t+W_t)\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_2Dlinear",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_2Dlinear",
    "category": "Constant",
    "text": "8 linear SDEs (as a 4x2 matrix):\n\ndu_t = udt + udW_t\n\nwhere β=1.01, α=0.87, and initial condtion u0=1/2 with solution\n\nu(tu0W_t)=u0exp((-frac^22)t+W_t)\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_wave",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_wave",
    "category": "Constant",
    "text": "du_t = -frac1100sin(u)cos^3(u)dt + frac110cos^2(u_t) dW_t\n\nand initial condition u0=1.0 with solution\n\nu(tu0W_t)=arctan(fracW_t10 + tan(u0))\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_lorenz",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_lorenz",
    "category": "Constant",
    "text": "Lorenz Attractor with additive noise\n\nbeginalign\ndx = *(y-x)dt + dW_t \ndy = (x*(-z) - y)dt + dW_t \ndz = (x*y - *z)dt + dW_t \nendalign\n\nwith =10, =28, =83, =30 and inital condition u0=111.\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_cubic",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_cubic",
    "category": "Constant",
    "text": "du_t = frac14u(1-u^2)dt + frac12(1-u^2)dW_t\n\nand initial condtion u0=1/2, with solution\n\nu(tu0W_t)=frac(1+u0)exp(W_t)+u0-1(1+u0)exp(W_t)+1-u0\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_additive",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_additive",
    "category": "Constant",
    "text": "Additive noise problem\n\nu_t = (fracsqrt1+t-frac12(1+t)u_t)dt + fracsqrt1+tdW_t\n\nand initial condition u0=1.0 with α=0.1 and β=0.05, with solution\n\nu(tu0W_t)=fracu0sqrt1+t + frac(t+W_t)sqrt1+t\n\n\n\n"
},

{
    "location": "types/sde_types.html#DiffEqProblemLibrary.prob_sde_additivesystem",
    "page": "SDE Types",
    "title": "DiffEqProblemLibrary.prob_sde_additivesystem",
    "category": "Constant",
    "text": "A multiple dimension extension of additiveSDEExample\n\n\n\n"
},

{
    "location": "types/sde_types.html#Example-Problems-1",
    "page": "SDE Types",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in DiffEqProblemLibrary.jl.To use a sample problem, such as prob_sde_linear, you can do something like:# Pkg.add(\"DiffEqProblemLibrary\")\nusing DiffEqProblemLibrary\nprob = prob_sde_linear\nsol = solve(prob)DiffEqProblemLibrary.prob_sde_linear\nDiffEqProblemLibrary.prob_sde_2Dlinear\nDiffEqProblemLibrary.prob_sde_wave\nDiffEqProblemLibrary.prob_sde_lorenz\nDiffEqProblemLibrary.prob_sde_cubic\nDiffEqProblemLibrary.prob_sde_additive\nDiffEqProblemLibrary.prob_sde_additivesystem"
},

{
    "location": "types/dae_types.html#",
    "page": "DAE Types",
    "title": "DAE Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/dae_types.html#DAE-Types-1",
    "page": "DAE Types",
    "title": "DAE Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/dae_types.html#Mathematical-Specification-of-an-ODE-Problem-1",
    "page": "DAE Types",
    "title": "Mathematical Specification of an ODE Problem",
    "category": "section",
    "text": "To define an ODE Problem, you simply need to give the function f and the initial condition u which define an ODE0 = f(tudu)f should be specified as f(t,u,du) (or in-place as f(t,u,du,resid)). Note that we are not limited to numbers or vectors for u₀, one is allowed to provide u₀ as arbitrary matrices / higher dimension tensors as well."
},

{
    "location": "types/dae_types.html#Problem-Type-1",
    "page": "DAE Types",
    "title": "Problem Type",
    "category": "section",
    "text": ""
},

{
    "location": "types/dae_types.html#Constructors-1",
    "page": "DAE Types",
    "title": "Constructors",
    "category": "section",
    "text": "DAEProblem(f,u0,du0,tspan) : Defines the ODE with the specified functions."
},

{
    "location": "types/dae_types.html#Fields-1",
    "page": "DAE Types",
    "title": "Fields",
    "category": "section",
    "text": "f: The function in the ODE.\nu0: The initial condition.\ndu0: The initial condition for the derivative.\ntspan: The timespan for the problem."
},

{
    "location": "types/dae_types.html#Special-Solver-Options-1",
    "page": "DAE Types",
    "title": "Special Solver Options",
    "category": "section",
    "text": ""
},

{
    "location": "types/dae_types.html#Special-Solution-Fields-1",
    "page": "DAE Types",
    "title": "Special Solution Fields",
    "category": "section",
    "text": ""
},

{
    "location": "types/dae_types.html#Example-Problems-1",
    "page": "DAE Types",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in DiffEqProblemLibrary.jl.To use a sample problem, such as prob_dae_resrob, you can do something like:#Pkg.add(\"DiffEqProblemLibrary\")\nusing DiffEqProblemLibrary\nprob = prob_dae_resrob\nsol = solve(prob,IDA)"
},

{
    "location": "types/fem_types.html#",
    "page": "FEM Types",
    "title": "FEM Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/fem_types.html#FEM-Types-1",
    "page": "FEM Types",
    "title": "FEM Types",
    "category": "section",
    "text": "Below are the definitions of the types which specify problems. Some general notes are:(t,x) vs (t,x,y): Mathematically one normally specifies equations in 2D as f(txy). However, in this code we use x as a vector. Thus you can think of x=x[:,1] and y=x[:,2]. Thus input equations are of the form f(x,t) no matter the dimension. If time is not included in the problem (for example, a Poisson equation problem), then we use f(x). An example is the equation u(xy)= sin(2x)cos(2y)(8^2) would be specified as sol(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])/(8π*π).\nLinearity: If the equation has linear term, they are specified with functions f(t,x). If it is nonlinear, it is specified with functions f(t,x,u). The boundary conditions are always (t,x)\nStochastic: By default the equation is deterministic. For each equation, one can specify a σ term which adds a stochastic (txu)dW_t term to the equation (or with (tx)dW_t if linear, must match f). dW_t corresponds to the type of noise which is chosen. By default this is space-time Gaussian white noise."
},

{
    "location": "types/fem_types.html#Poisson-Equation-Problem-1",
    "page": "FEM Types",
    "title": "Poisson Equation Problem",
    "category": "section",
    "text": "Wraps the data that defines a 2D linear Poisson equation problem:-u = fwith bounday conditions gD on the dirichlet boundary and gN on the neumann boundary. Linearity is determined by whether the forcing function f is a function of one variable (x) or two (u,x) (with x=[:,1] and y=[:,2]).If they keyword σ is given, then this wraps the data that define a 2D stochastic heat equation-u = f + dW"
},

{
    "location": "types/fem_types.html#Constructors-1",
    "page": "FEM Types",
    "title": "Constructors",
    "category": "section",
    "text": "PoissonProblem(f,analytic,Du,mesh): Defines the dirichlet problem with analytical solution analytic, solution gradient Du = [u_x,u_y], and forcing function fPoissonProblem(u0,f,mesh): Defines the problem with initial value u0 (as a function) and f. If your initial data is a vector, wrap it as u0(x) = vector.Note: If all functions are of (x), then the program assumes it's linear. Write your functions using the math to program syntrax translation: x = x[:,1] and y = x[:,2]. Use f=f(u,x) and σ=σ(u,x) (if specified) for nonlinear problems (with the boundary conditions still (x)). Systems of equations can be specified with u_i = u[:,i] as the ith variable. See the example problems for more help."
},

{
    "location": "types/fem_types.html#Keyword-Arguments-1",
    "page": "FEM Types",
    "title": "Keyword Arguments",
    "category": "section",
    "text": "gD = dirichlet boundary function\ngN = neumann boundary function\nσ = The function which multiplies the noise dW. By default σ=0.\nnoisetype = A string which specifies the type of noise to be generated. By default noisetype=:White for Gaussian Spacetime White Noise.\nnumvars = The number of variables in the Poisson system. Automatically calculated in many cases.\nD = Vector of diffusion coefficients. Defaults is D=ones(1,numvars)."
},

{
    "location": "types/fem_types.html#Heat-Equation-Problem-1",
    "page": "FEM Types",
    "title": "Heat Equation Problem",
    "category": "section",
    "text": "Wraps the data that defines a 2D heat equation problem:u_t = u + fwith bounday conditions gD on the dirichlet boundary and gN on the neumann boundary. Linearity is determined by whether the forcing function f is a function of two variables (t,x) or three (t,x,u) (with x=[:,1] and y=[:,2]).If they keyword σ is given, then this wraps the data that define a 2D stochastic heat equationu_t = u + f + dW_t"
},

{
    "location": "types/fem_types.html#Constructors-2",
    "page": "FEM Types",
    "title": "Constructors",
    "category": "section",
    "text": "HeatProblem(analytic,Du,f,mesh): Defines the dirichlet problem with solution analytic, solution gradient Du = [u_x,u_y], and the forcing function f.\nHeatProblem(u0,f,mesh): Defines the problem with initial value u0 (as a function) and f. If your initial data is a vector, wrap it as u0(x) = vector.Note: If all functions are of (t,x), then the program assumes it's linear. Write your functions using the math to program syntrax translation: x = x[:,1] and y = x[:,2]. Use f=f(t,x,u) and σ=σ(t,x,u) (if specified) for nonlinear problems (with the boundary conditions still (t,x)). Systems of equations can be specified with u_i = u[:,i] as the ith variable. See the example problems for more help."
},

{
    "location": "types/fem_types.html#Keyword-Arguments-2",
    "page": "FEM Types",
    "title": "Keyword Arguments",
    "category": "section",
    "text": "gD = dirichlet boundary function\ngN = neumann boundary function\nσ = The function which multiplies the noise dW. By default σ=0.\nnoisetype = A string which specifies the type of noise to be generated. By default noisetype=:White for Gaussian Spacetime White Noise.\nnumvars = Number of variables in the system. Automatically calculated from u0 in most cases.\nD = Array which defines the diffusion coefficients. Default is D=ones(1,numvars)."
},

{
    "location": "types/fem_types.html#Example-Problems-1",
    "page": "FEM Types",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in DiffEqProblemLibrary.jl.To use a sample problem, you need to do:# Pkg.add(\"DiffEqProblemLibrary\")\nusing DiffEqProblemLibrary"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_birthdeathinteractingsystem",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_birthdeathinteractingsystem",
    "category": "Constant",
    "text": "Nonlinear Poisson equation with f(u)=1-u2 and f(v)=5u-v and initial condition homogenous 1/2. Corresponds to the steady state of a humogenous reaction-diffusion equation with the same f.\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_noisywave",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_noisywave",
    "category": "Constant",
    "text": "Problem with deterministic solution: u(xy)= sin(2x)cos(2y)(8^2) and additive noise (xy)=5\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_birthdeathsystem",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_birthdeathsystem",
    "category": "Constant",
    "text": "Nonlinear Poisson equation with f(u)=1-u2 and f(v)=1-v and initial condition homogenous 1/2. Corresponds to the steady state of a humogenous reaction-diffusion equation with the same f.\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_wave",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_wave",
    "category": "Constant",
    "text": "Problem defined by the solution: u(xy)= sin(2x)cos(2y)(8^2)\n\n\n\n"
},

{
    "location": "types/fem_types.html#DiffEqProblemLibrary.prob_poisson_birthdeath",
    "page": "FEM Types",
    "title": "DiffEqProblemLibrary.prob_poisson_birthdeath",
    "category": "Constant",
    "text": "Nonlinear Poisson equation with f(u)=1-u2. Corresponds to the steady state of a humogenous reaction-diffusion equation with the same f.\n\n\n\n"
},

{
    "location": "types/fem_types.html#Poisson-Equation-1",
    "page": "FEM Types",
    "title": "Poisson Equation",
    "category": "section",
    "text": "DiffEqProblemLibrary.prob_poisson_birthdeathinteractingsystem\nDiffEqProblemLibrary.prob_poisson_noisywave\nDiffEqProblemLibrary.prob_poisson_birthdeathsystem\nDiffEqProblemLibrary.prob_poisson_wave\nDiffEqProblemLibrary.prob_poisson_birthdeath"
},

{
    "location": "types/fem_types.html#Heat-Equation-1",
    "page": "FEM Types",
    "title": "Heat Equation",
    "category": "section",
    "text": "DiffEqProblemLibrary.prob_femheat_birthdeathsystem\nDiffEqProblemLibrary.prob_femheat_birthdeathinteractingsystem\nDiffEqProblemLibrary.prob_femheat_diffuse\nDiffEqProblemLibrary.prob_femheat_stochasticbirthdeath\nDiffEqProblemLibrary.prob_femheat_moving\nDiffEqProblemLibrary.heatProblemExample_gierermeinhardt\nDiffEqProblemLibrary.heatProblemExample_grayscott\nDiffEqProblemLibrary.prob_femheat_pure\nDiffEqProblemLibrary.prob_femheat_diffusionconstants\nDiffEqProblemLibrary.prob_femheat_birthdeath"
},

{
    "location": "types/stokes_types.html#",
    "page": "Stokes Types",
    "title": "Stokes Types",
    "category": "page",
    "text": ""
},

{
    "location": "types/stokes_types.html#Stokes-Types-1",
    "page": "Stokes Types",
    "title": "Stokes Types",
    "category": "section",
    "text": ""
},

{
    "location": "types/stokes_types.html#Problem-Type-1",
    "page": "Stokes Types",
    "title": "Problem Type",
    "category": "section",
    "text": "StokesProblem Defines the solution to a stationary Stokes problem:"
},

{
    "location": "types/stokes_types.html#Constructors-1",
    "page": "Stokes Types",
    "title": "Constructors",
    "category": "section",
    "text": "StokesProblem(f₁,f₂,g,uanalytic,vanalytic,panalytic) StokesProblem(f₁,f₂,g,ugD,vgD)"
},

{
    "location": "types/stokes_types.html#Fields-1",
    "page": "Stokes Types",
    "title": "Fields",
    "category": "section",
    "text": "f₁::Function\nf₂::Function\ng::Function\nugD::Function\nvgD::Function\nuanalytic::Function\nvanalytic::Function\npanalytic::Function\ntrueknown::Bool"
},

{
    "location": "types/stokes_types.html#Example-Problems-1",
    "page": "Stokes Types",
    "title": "Example Problems",
    "category": "section",
    "text": "Examples problems can be found in DiffEqProblemLibrary.jl.To use a sample problem, use:# Pkg.add(\"DiffEqProblemLibrary\")\nusing DiffEqProblemLibrary"
},

{
    "location": "solvers/ode_solve.html#",
    "page": "ODE Solvers",
    "title": "ODE Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/ode_solve.html#ODE-Solvers-1",
    "page": "ODE Solvers",
    "title": "ODE Solvers",
    "category": "section",
    "text": "solve(prob::ODEProblem,alg;kwargs)Solves the ODE defined by prob using the algorithm alg. If no algorithm is given, a default algorithm will be chosen."
},

{
    "location": "solvers/ode_solve.html#Recommended-Methods-1",
    "page": "ODE Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "It is suggested that you try choosing an algorithm using the alg_hints keyword argument. However, in some cases you may want something specific, or you may just be curious. This guide is to help you choose the right algorithm."
},

{
    "location": "solvers/ode_solve.html#Non-Stiff-Problems-1",
    "page": "ODE Solvers",
    "title": "Non-Stiff Problems",
    "category": "section",
    "text": "For non-stiff problems, the native OrdinaryDiffEq.jl algorithms are vastly more efficient than the other choices. For most non-stiff problems, we recommend Tsit5. When more robust error control is required, BS5 is a good choice. For fast solving at lower tolerances, we recommend BS3. For tolerances which are at about the truncation error of Float64 (1e-16), we recommend Vern6, Vern7, or Vern8 as efficient choices.For high accuracy non-stiff solving (BigFloat and tolerances like <1e-20), we recommend the Feagin12 or Feagin14 methods. These are more robust than Adams-Bashforth methods to discontinuities and achieve very high precision, and are much more efficient than the extrapolation methods. Note that the Feagin methods are the only high-order optimized methods which do not include a high-order interpolant (they do include a 3rd order Hermite interpolation if needed). If a high-order method is needed with a high order interpolant, then you should choose Vern9 which is Order 9 with an Order 9 interpolant."
},

{
    "location": "solvers/ode_solve.html#Stiff-Problems-1",
    "page": "ODE Solvers",
    "title": "Stiff Problems",
    "category": "section",
    "text": "For mildly stiff problems at low tolerances it is recommended that you use Rosenbrock23 As a native DifferentialEquations.jl solver, many Julia-defined numbers will work. This method uses ForwardDiff to automatically guess the Jacobian. For faster solving when the Jacobian is known, use radau. For highly stiff problems where Julia-defined numbers need to be used (SIUnits, Arbs), Trapezoid is the current best choice. However, for the most efficient highly stiff solvers, use radau or CVODE_BDF provided by wrappers to the ODEInterface and Sundials packages respectively (see the conditional dependencies documentation). These algorithms require that the number types are Float64."
},

{
    "location": "solvers/ode_solve.html#Full-List-of-Methods-1",
    "page": "ODE Solvers",
    "title": "Full List of Methods",
    "category": "section",
    "text": "Choose one of these methods with the alg keyword in solve."
},

{
    "location": "solvers/ode_solve.html#OrdinaryDiffEq.jl-1",
    "page": "ODE Solvers",
    "title": "OrdinaryDiffEq.jl",
    "category": "section",
    "text": "Unless otherwise specified, the OrdinaryDiffEq algorithms all come with a 3rd order Hermite polynomial interpolation. The algorithms denoted as having a \"free\" interpolation means that no extra steps are required for the interpolation. For the non-free higher order interpolating functions, the extra steps are computed lazily (i.e. not during the solve).The OrdinaryDiffEq.jl algorithms achieve the highest performance for nonstiff equations while being the most generic: accepting the most Julia-based types, allow for sophisticated event handling, etc. They are recommended for all nonstiff problems. For stiff problems, the algorithms are currently not as high of order or as well-optimized as the ODEInterface.jl or Sundials.jl algorithms, and thus if the problem is on arrays of Float64, they are recommended. However, the stiff methods from OrdinaryDiffEq.jl are able to handle a larger generality of number types (arbitrary precision, etc.) and thus are recommended for stiff problems on for non-Float64 numbers.Euler- The canonical forward Euler method.\nMidpoint - The second order midpoint method.\nRK4 - The canonical Runge-Kutta Order 4 method.\nBS3 - Bogacki-Shampine 3/2 method.\nDP5 - Dormand-Prince's 5/4 Runge-Kutta method. (free 4th order interpolant)\nTsit5 - Tsitouras 5/4 Runge-Kutta method. (free 4th order interpolant)\nBS5 - Bogacki-Shampine 5/4 Runge-Kutta method. (5th order interpolant)\nVern6 - Verner's \"Most Efficient\" 6/5 Runge-Kutta method. (6th order interpolant)\nVern7 - Verner's \"Most Efficient\" 7/6 Runge-Kutta method. (7th order interpolant)\nTanYam7 - Tanaka-Yamashita 7 Runge-Kutta method.\nDP8 - Hairer's 8/5/3 adaption of the Dormand-Prince 8 method Runge-Kutta method. (7th order interpolant)\nTsitPap8 - Tsitouras-Papakostas 8/7 Runge-Kutta method.\nVern8 - Verner's \"Most Efficient\" 8/7 Runge-Kutta method. (8th order interpolant)\nVern9 - Verner's \"Most Efficient\" 9/8 Runge-Kutta method. (9th order interpolant)\nFeagin10 - Feagin's 10th-order Runge-Kutta method.\nFeagin12 - Feagin's 12th-order Runge-Kutta method.\nFeagin14 - Feagin's 14th-order Runge-Kutta method.\nImplicitEuler - A 1st order implicit solver. Unconditionally stable.\nTrapezoid - A second order unconditionally stable implicit solver. Good for highly stiff.\nRosenbrock23 - An Order 2/3 L-Stable fast solver which is good for mildy stiff equations with oscillations at low tolerances.\nRosenbrock32 - An Order 3/2 A-Stable fast solver which is good for mildy stiff equations without oscillations at low tolerances. Note that this method is prone to instability in the presence of oscillations, so use with caution.Example usage:alg = Tsit5()\nsolve(prob,alg)  Additionally, there is the tableau method:ExplicitRK - A general Runge-Kutta solver which takes in a tableau. Can be adaptive. Tableausare specified via the keyword argument tab=tableau. The default tableau is   for Dormand-Prince 4/5. Other supplied tableaus can be found in the Supplied Tableaus section.Example usage:alg = ExplicitRK(tableau=constructDormandPrince())\nsolve(prob,alg)"
},

{
    "location": "solvers/ode_solve.html#CompositeAlgorithm-1",
    "page": "ODE Solvers",
    "title": "CompositeAlgorithm",
    "category": "section",
    "text": "One unique feature of OrdinaryDiffEq.jl is the CompositeAlgorithm, which allows you to, with very minimal overhead, design multimethod which switches between chosen algorithms as needed. The syntax is CompositeAlgorthm(algtup,choice_function) where algtup is a tuple of OrdinaryDiffEq.jl algorithms, and choice_function is a function which declares which method to use in the following step. For example, we can design a multimethod which uses Tsit5() but switches to Vern7() whenever dt is too small:choice_function(integrator) = (Int(integrator.dt<0.001) + 1)\nalg_switch = CompositeAlgorithm((Tsit5(),Vern7()),choice_function)The choice_function takes in an integrator and thus all of the features available in the Integrator Interface  can be used in the choice function."
},

{
    "location": "solvers/ode_solve.html#Sundials.jl-1",
    "page": "ODE Solvers",
    "title": "Sundials.jl",
    "category": "section",
    "text": "The Sundials suite is built around multistep methods. These methods are more efficient than other methods when the cost of the function calculations is really high, but for less costly functions the cost of nurturing the timestep overweighs the benefits. However, the BDF method is a classic method for stiff equations and \"generally works\".CVODE_BDF - CVode Backward Differentiation Formula (BDF) solver.\nCVODE_Adams - CVode Adams-Moulton solverNote that the constructors for the Sundials algorithms take two arguments:method - This is the method for solving the implicit equation. For BDF this defaults to :Newton while for Adams this defaults to :Functional. These choices match the recommended pairing in the Sundials.jl manual. However, note that using the :Newton method may take less iterations but requires more memory than the :Function iteration approach.\nlinearsolver - This is the linear solver which is used in the :Newton method.The choices are:- `:Dense` - A dense linear solver\n- `:Band` - A solver specialized for banded Jacobians. If used, you must set the\n  position of the upper and lower non-zero diagonals via `jac_upper` and\n  `jac_lower`.\n- `:Diagonal` - This method is specialized for diagonal Jacobians.\n- `BCG` - A Biconjugate gradient method.\n- `TFQMR` - A TFQMR method.Example:CVODE_BDF() # BDF method using Newton + Dense solver\nCVODE_BDF(method=:Functional) # BDF method using Functional iterations\nCVODE_BDF(linear_solver=:Band,jac_upper=3,jac_lower=3) # Banded solver with nonzero diagonals 3 up and 3 down\nCVODE_BDF(linear_solver=:BCG) # Biconjugate gradient method                                   "
},

{
    "location": "solvers/ode_solve.html#ODE.jl-1",
    "page": "ODE Solvers",
    "title": "ODE.jl",
    "category": "section",
    "text": "ode23 - Bogacki-Shampine's order 2/3 Runge-Kutta  method\node45 - A Dormand-Prince order 4/5 Runge-Kutta method\node23s - A modified Rosenbrock order 2/3 method due to Shampine\node78 - A Fehlburg order 7/8 Runge-Kutta method\node4 - The classic Runge-Kutta order 4 method\node4ms - A fixed-step, fixed order Adams-Bashforth-Moulton method\node4s - A 4th order Rosenbrock method due to Shampine"
},

{
    "location": "solvers/ode_solve.html#ODEInterface.jl-1",
    "page": "ODE Solvers",
    "title": "ODEInterface.jl",
    "category": "section",
    "text": "The ODEInterface algorithms are the classic Hairer Fortran algorithms. While the nonstiff algorithms are superseded by the more featured and higher performance Julia implementations from OrdinaryDiffEq.jl, the stiff solvers such as radau are some of the most efficient methods available (but are restricted for use on arrays of Float64).Note that this setup is not automatically included with DifferentialEquaitons.jl. To use the following algorithms, you must install and use ODEInterfaceDiffEq.jl:Pkg.add(\"ODEInterfaceDiffEq\")\nusing ODEInterfaceDiffEqdopri5 - Hairer's classic implementation of the Dormand-Prince 4/5 method.\ndop853 - Explicit Runge-Kutta 8(5,3) by Dormand-Prince\nodex - GBS extrapolation-algorithm based on the midpoint rule\nseulex - extrapolation-algorithm based on the linear implicit Euler method\nradau - implicit Runge-Kutta (Radau IIA) of variable order between 5 and 13\nradau5 - implicit Runge-Kutta method (Radau IIA) of order 5\nrodas - Rosenbrock 4(3) method"
},

{
    "location": "solvers/ode_solve.html#LSODA.jl-1",
    "page": "ODE Solvers",
    "title": "LSODA.jl",
    "category": "section",
    "text": "This setup provides a wrapper to the algorithm LSODA, a well-known method which uses switching to solve both stiff and non-stiff equiations.lsoda - The LSODA wrapper algorithm.Note that this setup is not automatically included with DifferentialEquaitons.jl. To use the following algorithms, you must install and use LSODA.jl:Pkg.add(\"LSODA\")\nusing LSODA"
},

{
    "location": "solvers/ode_solve.html#ODEIterators.jl-1",
    "page": "ODE Solvers",
    "title": "ODEIterators.jl",
    "category": "section",
    "text": "The ODEIterators.jl algorithms all come with a 3rd order Hermite polynomial interpolation.rk23 - Bogakai-Shampine's 2/3 method\nrk45 - Dormand-Prince's 4/5 method\nfeh78 - Runge-Kutta-Fehlberg 7/8 method\nModifiedRosenbrockIntegrator - Rosenbrock's 2/3 method\nfeuler - Forward Euler\nmidpoint - Midpoint Method\nheun - Heun's Method\nrk4 - RK4\nfeh45 - Runge-Kutta-Fehlberg 4/5 method"
},

{
    "location": "solvers/ode_solve.html#List-of-Supplied-Tableaus-1",
    "page": "ODE Solvers",
    "title": "List of Supplied Tableaus",
    "category": "section",
    "text": "A large variety of tableaus have been supplied by default via DiffEqDevTools.jl. The list of tableaus can be found in the developer docs. For the most useful and common algorithms, a hand-optimized version is supplied in OrdinaryDiffEq.jl which is recommended for general uses (i.e. use DP5 instead of ExplicitRK with tableau=constructDormandPrince()). However, these serve as a good method for comparing between tableaus and understanding the pros/cons of the methods. Implemented are every published tableau (that I know exist). Note that user-defined tableaus also are accepted. To see how to define a tableau, checkout the premade tableau source code. Tableau docstrings should have appropriate citations (if not, file an issue).Plot recipes are provided which will plot the stability region for a given tableau."
},

{
    "location": "solvers/ode_solve.html#Solver-Compatibility-and-Defaults-Chart-1",
    "page": "ODE Solvers",
    "title": "Solver Compatibility and Defaults Chart",
    "category": "section",
    "text": "The following chart describes the compatibility and defaults of the specific solvers to the common interface."
},

{
    "location": "solvers/sde_solve.html#",
    "page": "SDE Solvers",
    "title": "SDE Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/sde_solve.html#SDE-Solvers-1",
    "page": "SDE Solvers",
    "title": "SDE Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/sde_solve.html#Recommended-Methods-1",
    "page": "SDE Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "For most problems where a good amount of accuracy is required and stiffness may be an issue, the SRIW1Optimized algorithm should do well. If the problem has additive noise, then SRA1Optimized will be the optimal algorithm. If you simply need to quickly compute a large ensamble and don't need accuracy (and don't have stiffness problems), then EM can do well."
},

{
    "location": "solvers/sde_solve.html#Special-Keyword-Arguments-1",
    "page": "SDE Solvers",
    "title": "Special Keyword Arguments",
    "category": "section",
    "text": "discard_length - Size at which to discard future information in adaptive. Default is 1e-15.\ntableau: The tableau for an :SRA or :SRI algorithm. Defaults to SRIW1 or SRA1.\nadaptivealg: The adaptive timestepping algorithm. Default is :RSwm3."
},

{
    "location": "solvers/sde_solve.html#Implemented-Solvers-1",
    "page": "SDE Solvers",
    "title": "Implemented Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/sde_solve.html#StochasticDiffEq.jl-1",
    "page": "SDE Solvers",
    "title": "StochasticDiffEq.jl",
    "category": "section",
    "text": "EM- The Euler-Maruyama method.\nRKMil - An explicit Runge-Kutta discretization of the strong Order 1.0 Milstein method.\nSRA - The strong Order 2.0 methods for additive SDEs due to Rossler. Not yet implemented. Default tableau is for SRA1.\nSRI - The strong Order 1.5 methods for diagonal/scalar SDEs due to Rossler. Default tableau is for SRIW1.\nSRIW1 - An optimized version of SRIW1. Strong Order 1.5.\nSRA1 - An optimized version of SRIA1. Strong Order 2.0."
},

{
    "location": "solvers/dae_solve.html#",
    "page": "DAE Solvers",
    "title": "DAE Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/dae_solve.html#DAE-Solvers-1",
    "page": "DAE Solvers",
    "title": "DAE Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/dae_solve.html#Recomended-Methods-1",
    "page": "DAE Solvers",
    "title": "Recomended Methods",
    "category": "section",
    "text": "The recommended method for performance is IDA from the Sundials package if you are solving problems with Float64. It's a very well-optimized method, and allows you to have a little bit of control over the linear solver to better tailor it to your problem. A similar algorithm is daskr. Which one is more efficient is problem dependent.If your problem requires special Julia types like arbitrary precision numbers, then dassl is the method of choice."
},

{
    "location": "solvers/dae_solve.html#Special-Keyword-Arguments-1",
    "page": "DAE Solvers",
    "title": "Special Keyword Arguments",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/dae_solve.html#Implemented-Solvers-1",
    "page": "DAE Solvers",
    "title": "Implemented Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/dae_solve.html#Sundials.jl-1",
    "page": "DAE Solvers",
    "title": "Sundials.jl",
    "category": "section",
    "text": "IDA - This is the IDA method from the Sundials.jl package.Note that the constructors for the Sundials algorithms take an argument:linearsolver - This is the linear solver which is used in the Newton iterations. The choices are:\n:Dense - A dense linear solver\n:Band - A solver specialized for banded Jacobians. If used, you must set the position of the upper and lower non-zero diagonals via jac_upper and jac_lower.\n:Diagonal - This method is specialized for diagonal Jacobians.\nBCG - A Biconjugate gradient method.\nTFQMR - A TFQMR method.Example:IDA() # Newton + Dense solver\nIDA(linear_solver=:Band,jac_upper=3,jac_lower=3) # Banded solver with nonzero diagonals 3 up and 3 down\nIDA(linear_solver=:BCG) # Biconjugate gradient method                                   "
},

{
    "location": "solvers/dae_solve.html#DASKR.jl-1",
    "page": "DAE Solvers",
    "title": "DASKR.jl",
    "category": "section",
    "text": "DASKR.jl is not automatically included by DifferentialEquations.jl. To use this algorithm, you will need to install and use the package:Pkg.add(\"DASKR\")\nusing DASKRdaskr - This is a wrapper for the well-known DASKR algorithm."
},

{
    "location": "solvers/dae_solve.html#DASSL.jl-1",
    "page": "DAE Solvers",
    "title": "DASSL.jl",
    "category": "section",
    "text": "dassl - A native Julia implementation of the DASSL algorithm."
},

{
    "location": "solvers/fempoisson_solve.html#",
    "page": "FEM Poisson Solvers",
    "title": "FEM Poisson Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/fempoisson_solve.html#FEM-Poisson-Solvers-1",
    "page": "FEM Poisson Solvers",
    "title": "FEM Poisson Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/fempoisson_solve.html#Recommended-Methods-1",
    "page": "FEM Poisson Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "The only available method is FEMDiffEqPoisson. This method uses a chosen linear solver from IterativeSolvers.jl on a linear problem or a nonlinear solver from NLsolve.jl for nonlinear problems. Additionally, the keyword method can be used to specify the"
},

{
    "location": "solvers/fempoisson_solve.html#List-of-Methods-1",
    "page": "FEM Poisson Solvers",
    "title": "List of Methods",
    "category": "section",
    "text": "Factorizations (:LU, :Cholesky, :QR, :SVD)\nConjugate-Gradient (:CG)\n:GMRESExample:sol = solve(prob,FEMDiffEqPoisson(),solver=:CG)"
},

{
    "location": "solvers/femheat_solve.html#",
    "page": "FEM Heat Solvers",
    "title": "FEM Heat Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/femheat_solve.html#FEM-Heat-Solvers-1",
    "page": "FEM Heat Solvers",
    "title": "FEM Heat Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/femheat_solve.html#Recommended-Methods-1",
    "page": "FEM Heat Solvers",
    "title": "Recommended Methods",
    "category": "section",
    "text": "For nonstiff problems it's recommended you use FEMDiffEqHeatEuler, while for stiff problems it's recommended that you use FEMDiffEqHeatSemiImplicitCrankNicholson."
},

{
    "location": "solvers/femheat_solve.html#Avaliable-Methods-1",
    "page": "FEM Heat Solvers",
    "title": "Avaliable Methods",
    "category": "section",
    "text": "FEMDiffEqHeatEuler\nFEMDiffEqHeatImplicitEuler\nFEMDiffEqHeatCrankNicholson\nFEMDiffEqHeatSemiImplicitEuler\nFEMDiffEqHeatSemiImplicitCrankNicholsonAdditionally, for linear solves, one can choose the method by which the linear solve takes place via the method keyword argument.Factorizations (:LU, :Cholesky, :QR, :SVD)\nConjugate-Gradient (:CG)\n:GMRESExample:sol = solve(prob,FEMDiffEqHeatCrankNicholson(),solver=:CG)"
},

{
    "location": "solvers/fdmstokes_solve.html#",
    "page": "Stokes Solvers",
    "title": "Stokes Solvers",
    "category": "page",
    "text": ""
},

{
    "location": "solvers/fdmstokes_solve.html#Stokes-Solvers-1",
    "page": "Stokes Solvers",
    "title": "Stokes Solvers",
    "category": "section",
    "text": ""
},

{
    "location": "solvers/fdmstokes_solve.html#DiffEqBase.solve-Tuple{StokesDiffEq.StokesProblem,StokesDiffEq.FDMMesh}",
    "page": "Stokes Solvers",
    "title": "DiffEqBase.solve",
    "category": "Method",
    "text": "solve(prob::StokesProblem,mesh::FDMMesh)\n\nSolves the given stationary Stokes problem on the given finite difference mesh.\n\nKeyword Arguments\n\nconverrors: Whether to calculate all of the errors along the convergence. Default is true.\nmaxiters: Maximum number of iterations before haulting. Default is 100.\nalg: The solver algorithm. Default is \"dgs\". Other option is \"multigrid\".\nlevel: The number of levels in the Multigrid. Default is 2.\nsmoothSteps: The number of Gauss-Seidel iterations to do at each smoothing step. Default is 10.\ncoarseSteps: The number of Gauss-Seidel iterations to do at the coarsegrid. Default is 40.\ngsiters: The number of Gauss-Seidel iterations to do at each step. Default is 20.\n\n\n\n"
},

{
    "location": "solvers/fdmstokes_solve.html#Stokes-Equation-1",
    "page": "Stokes Solvers",
    "title": "Stokes Equation",
    "category": "section",
    "text": "solve(::StokesProblem,::FDMMesh)"
},

{
    "location": "features/performance_overloads.html#",
    "page": "Performance Overloads",
    "title": "Performance Overloads",
    "category": "page",
    "text": ""
},

{
    "location": "features/performance_overloads.html#Performance-Overloads-1",
    "page": "Performance Overloads",
    "title": "Performance Overloads",
    "category": "section",
    "text": "The DiffEq ecosystem provides an extensive interface for declaring extra functions associated with the differential equation's data. In traditional libraries there is usually only one option: the Jacobian. However, we allow for a large array of pre-computed functions to speedup the calculations. This is offered via function overloading (or overloaded types) and allows for these extra features to be offered without cluttering the problem interface."
},

{
    "location": "features/performance_overloads.html#Declaring-Explicit-Jacobians-1",
    "page": "Performance Overloads",
    "title": "Declaring Explicit Jacobians",
    "category": "section",
    "text": "The most standard case, declaring a function for a Jacobian is done by overloading the function f(t,u,du) with an in-place updating function for the Jacobian: f(Val{:jac},t,u,J) where the value type is used for dispatch. For example, take the LotkaVolterra model:f(t,u,du) = begin\n         du[1] = 2.0 * u[1] - 1.2 * u[1]*u[2]\n         du[2] = -3 * u[2] + u[1]*u[2]\nendTo declare the Jacobian we simply add the dispatch:function f(::Type{Val{:jac}},t,u,J)\n  J[1,1] = p.a - p.b * u[2]\n  J[1,2] = -(p.b) * u[1]\n  J[2,1] = 1 * u[2]\n  J[2,2] = -3 + u[1]\n  nothing\nendNote that this can also be done by generating a call-overloaded type. Indeed, this is what a ParameterizedFunctions.jl does, so see its README"
},

{
    "location": "features/performance_overloads.html#Other-Available-Functions-1",
    "page": "Performance Overloads",
    "title": "Other Available Functions",
    "category": "section",
    "text": "The full interface available to the solvers is as follows:f(t,u,du) # Call the function\nf(t,u,params,du) # Call the function to calculate with parameters params (vector)\nf(Val{:tgrad},t,u,J) # Call the explicit t-gradient function\nf(Val{:a},t,u,2.0,du) # Call the explicit parameter function with a=2.0\nf(Val{:deriv},Val{:a},t,u,2.0,df) # Call the explicit parameter derivative function with a=2.0\nf(Val{:paramjac},t,u,params,J) # Call the explicit parameter Jacobian function\nf(Val{:jac},t,u,J) # Call the explicit Jacobian function\nf(Val{:expjac},t,u,γ,J) # Call the explicit exponential Jacobian function exp(γJ)\nf(Val{:invjac},t,u,iJ) # Call the explicit Inverse Jacobian function\nf(Val{:invW},t,u,γ,iW) # Call the explicit inverse Rosenbrock-W function (M - γJ)^(-1)\nf(Val{:invW_t},t,u,γ,iW) # Call the explicit transformed inverse Rosenbrock-W function (M/γ - J)^(-1)\nf(Val{:hes},t,u,H) # Call the explicit Hessian function\nf(Val{:invhes},t,u,iH) # Call the explicit Inverse Hessian functionOverloads which require parameters should subtype ParameterizedFunction. These are all in-place functions which write into the last variable. See solver documentation specifics to know which optimizations the algorithms can use."
},

{
    "location": "features/performance_overloads.html#Symbolically-Calculating-the-Functions-1",
    "page": "Performance Overloads",
    "title": "Symbolically Calculating the Functions",
    "category": "section",
    "text": "ParameterizedFunctions.jl automatically calculates as many of these functions as possible and generates the overloads using SymEngine. Thus for best performance with the least work, it is suggested one use ParameterizedFunctions.jl."
},

{
    "location": "features/callback_functions.html#",
    "page": "Event Handling and Callback Functions",
    "title": "Event Handling and Callback Functions",
    "category": "page",
    "text": ""
},

{
    "location": "features/callback_functions.html#Event-Handling-and-Callback-Functions-1",
    "page": "Event Handling and Callback Functions",
    "title": "Event Handling and Callback Functions",
    "category": "section",
    "text": ""
},

{
    "location": "features/callback_functions.html#Introduction-to-Callback-Functions-1",
    "page": "Event Handling and Callback Functions",
    "title": "Introduction to Callback Functions",
    "category": "section",
    "text": "DifferentialEquations.jl allows for using callback functions to inject user code into the solver algorithms. This is done by defining a callback function and passing that function to the solver. After each accepted iteration this function is called. The standard callback is defined as:default_callback = @ode_callback begin\n  @ode_savevalues\nendThis runs the saving routine at every timestep (inside of this saving routine it   checks the iterations vs timeseries_steps etc., so it's quite complicated).   However, you can add any code you want to this callback. For example, we can   make it print the value at each timestep by doing:my_callback = @ode_callback begin\n  println(u)\n  @ode_savevalues\nendand pass this to the solver:sol = solve(prob,callback=my_callback)Later in the manual the full API for callbacks is given (the callbacks are very   general and thus the full API is complex enough to handle just about anything),   but for most users it's recommended that you use the simplified event handling   DSL described below."
},

{
    "location": "features/callback_functions.html#Event-Handling-1",
    "page": "Event Handling and Callback Functions",
    "title": "Event Handling",
    "category": "section",
    "text": "Since event handling is a very common issue, a special domain-specific language (DSL) was created to make event handling callbacks simple to define."
},

{
    "location": "features/callback_functions.html#Example-1:-Bouncing-Ball-1",
    "page": "Event Handling and Callback Functions",
    "title": "Example 1: Bouncing Ball",
    "category": "section",
    "text": "First let's look at the bouncing ball. @ode_def from ParameterizedFunctions.jl was to define the problem, where the first variable y is the height which changes by v the velocity, where the velocity is always changing at -g where is the gravitational constant. This is the equation:f = @ode_def BallBounce begin\n  dy =  v\n  dv = -g\nend g=9.81All we have to do in order specify the event is to have a function which should always be positive with an event occurring at 0. For now at least that's how it's specified, if a generalization is needed we can talk about this (but it needs to be \"root-findable\"). For here it's clear that we just want to check if the ball's height ever hits zero:function event_f(t,u) # Event when event_f(t,u) == 0\n  u[1]\nendNow we have to say what to do when the event occurs. In this case we just flip the velocity (the second variable)function apply_event!(u,cache)\n  u[2] = -u[2]\nendThat's all you need to specify the callback function with the macro:callback = @ode_callback begin\n  @ode_event event_f apply_event!\nendOne thing to note is that by default this will check at 5 evently-spaced interpolated values for if the event condition is satisfied (i.e. if event_f(t,u)<0). This is because if your problem is oscillatory, sometimes too large of a timestep will miss the event. One may want to specify a number of points in the interval to interpolate to match the computational effort to the problem. This is done with one more parameter to @ode_event. Note that the interpolations are comparatively cheap to calculate so it's recommended that one use a few (if the memory for calck is available).Another parameter you can set for @ode_event is whether to use a rootfinder. By default, when an event is detected, a rootfinding algorithm (provided by NLsolve) is used to find the exact timepoint of the event. This can be computationally costly for large systems and thus there's an option to turn it off.The next option is to allow for termination on event. This will make the ODE solver stop when the event happens. For example, if we set it to true in our example, then the ODE solver will return the solution the first time the ball hits the ground. Whether it will save the \"overshot\" point or the \"true end\" depends on whether rootfinding is used.Lastly, you can also tell the solver to decrease dt after the event occurs. This can be helpful if the discontinuity changes the problem immensely. Using the full power of the macro, we can define an event asconst dt_safety = 1 # Multiplier to dt after an event\nconst interp_points = 10\nconst terminate_on_event = false\ncallback = @ode_callback begin\n  @ode_event event_f apply_event! rootfind_event_loc interp_points terminate_on_event dt_safety\nendThen you can solve and plot:u0 = [50.0,0.0]\ntspan = (0.0,15.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,callback=callback)\nplot(sol)(Image: BallBounce)As you can see from the resulting image, DifferentialEquations.jl is smart enough to use the interpolation to hone in on the time of the event and apply the event back at the correct time. Thus one does not have to worry about the adaptive timestepping \"overshooting\" the event as this is handled for you. Notice that the event macro will save the value(s) at the discontinuity."
},

{
    "location": "features/callback_functions.html#Example-2:-Growing-Cell-Population-1",
    "page": "Event Handling and Callback Functions",
    "title": "Example 2: Growing Cell Population",
    "category": "section",
    "text": "Another interesting issue are models of changing sizes. The ability to handle such events is a unique feature of DifferentialEquations.jl! The problem we would like to tackle here is a cell population. We start with 1 cell with a protein X which increases linearly with time with rate parameter α. Since we are going to be changing the size of the population, we write the model in the general form:const α = 0.3\nf = function (t,u,du)\n  for i in 1:length(u)\n    du[i] = α*u[i]\n  end\nendOur model is that, whenever the protein X gets to a concentration of 1, it triggers a cell division. So we check to see if any concentrations hit 1:function event_f(t,u) # Event when event_f(t,u) == 0\n  1-maximum(u)\nendAgain, recall that this function finds events as switching from positive to negative, so 1-maximum(u) is positive until a cell has a concentration of X which is 1, which then triggers the event. At the event, we have that the call splits into two cells, giving a random amount of protein to each one. We can do this by resizing the cache (adding 1 to the length of all of the caches) and setting the values of these two cells at the time of the event:function apply_event!(u,cache)\n  @ode_change_cachesize cache length+1\n  maxidx = findmax(u)[2]\n  Θ = rand()\n  u[maxidx] = Θ\n  u[end] = 1-Θ\nend@ode_change_cachesize cache length+1 is used to change the length of all of the internal caches (which includes u) to be their current length + 1, growing the ODE system. Then the following code sets the new protein concentrations. Now we can solve:const dt_safety = 1\nconst interp_points = 10\ncallback = @ode_callback begin\n  @ode_event event_f apply_event! interp_points dt_safety\nend\nu0 = [0.2]\ntspan = (0.0,10.0)\nprob = ODEProblem(f,u0,tspan)\nsol = solve(prob,callback=callback)The plot recipes do not have a way of handling the changing size, but we can plot from the solution object directly. For example, let's make a plot of how many cells there are at each time. Since these are discrete values, we calculate and plot them directly:plot(sol.t,map((x)->length(x),sol[:]),lw=3,\n     ylabel=\"Number of Cells\",xlabel=\"Time\")(Image: NumberOfCells)Now let's check-in on a cell. We can still use the interpolation to get a nice plot of the concentration of cell 1 over time. This is done with the command:ts = linspace(0,10,100)\nplot(ts,map((x)->x[1],sol.(ts)),lw=3,\n     ylabel=\"Amount of X in Cell 1\",xlabel=\"Time\")(Image: Cell1)Notice that every time it hits 1 the cell divides, giving cell 1 a random amount of X which then grows until the next division.Note that one macro which was not shown in this example is @ode_change_deleteat which performs deleteat! on the caches. For example, to delete the second cell, we could use:@ode_change_deleteat cache 2This allows you to build sophisticated models of populations with births and deaths."
},

{
    "location": "features/callback_functions.html#Advanced:-Callback-Function-API-1",
    "page": "Event Handling and Callback Functions",
    "title": "Advanced: Callback Function API",
    "category": "section",
    "text": "The callback functions have access to a lot of the functionality of the solver. The macro defines a function which is written as follows:macro ode_callback(ex)\n  esc(quote\n    function (alg,f,t,u,k,tprev,uprev,kprev,ts,timeseries,ks,dtprev,dt,saveat,cursaveat,iter,save_timeseries,timeseries_steps,uEltype,ksEltype,dense,kshortsize,issimple_dense,fsal,fsalfirst,cache,calck,T,Ts)\n      reeval_fsal = false\n      event_occurred = false\n      $(ex)\n      cursaveat,dt,t,T,reeval_fsal\n    end\n  end)\nendAll of the parts of the algorithm are defined in the internal solver documentation."
},

{
    "location": "features/callback_functions.html#Example:-Bouncing-Ball-Without-Macros-1",
    "page": "Event Handling and Callback Functions",
    "title": "Example: Bouncing Ball Without Macros",
    "category": "section",
    "text": "Here is an example of the defining the ball bouncing callback without the usage of macros. The entire code in its fully glory is generic enough to handle any of the implemented DifferentialEquations.jl algorithms, which special differences depending on the type of interpolant, implementation of FSAL, etc. For these reasons it's usually recommended to use the event handling macro, though this kind of code will allow you handle pretty much anything!manual_callback = function (alg,f,t,u,k,tprev,uprev,kprev,ts,timeseries,ks,dtprev,dt,saveat,cursaveat,iter,save_timeseries,timeseries_steps,uEltype,ksEltype,dense,kshortsize,issimple_dense,fsal,fsalfirst,cache,calck,T,Ts)\n  reeval_fsal = false\n  event_occurred = false\n  dt_safety = 1\n  interp_points = 10\n\n  # Event Handling\n  ode_addsteps!(k,tprev,uprev,dtprev,alg,f)\n  Θs = linspace(0,1,interp_points)\n  interp_index = 0\n  # Check if the event occured\n  if event_f(t,u)<0\n    event_occurred = true\n    interp_index = interp_points\n  elseif interp_points!=0 # Use the interpolants for safety checking\n    for i in 2:length(Θs)-1\n      if event_f(t+dt*Θs[i],ode_interpolant(Θs[i],dtprev,uprev,u,kprev,k,alg))<0\n        event_occurred = true\n        interp_index = i\n        break\n      end\n    end\n  end\n\n  if event_occurred\n    if interp_index == interp_points # If no safety interpolations, start in the middle as well\n      initial_Θ = [.5]\n    else\n      initial_Θ = [Θs[interp_index]] # Start at the closest\n    end\n    find_zero = (Θ,val) -> begin\n      val[1] = event_f(t+Θ[1]*dt,ode_interpolant(Θ[1],dtprev,uprev,u,kprev,k,alg))\n    end\n    res = nlsolve(find_zero,initial_Θ)\n    val = ode_interpolant(res.zero[1],dtprev,uprev,u,kprev,k,alg)\n    for i in eachindex(u)\n      u[i] = val[i]\n    end\n    dtprev *= res.zero[1]\n    t = tprev + dtprev\n\n    if alg ∈ DIFFERENTIALEQUATIONSJL_SPECIALDENSEALGS\n      resize!(k,kshortsize) # Reset k for next step\n      k = typeof(k)() # Make a local blank k for saving\n      ode_addsteps!(k,tprev,uprev,dtprev,alg,f)\n    elseif typeof(u) <: Number\n      k = f(t,u)\n    else\n      f(t,u,k)\n    end\n  end\n\n  @ode_savevalues\n\n  if event_occurred\n    apply_event!(u)\n    if alg ∉ DIFFERENTIALEQUATIONSJL_SPECIALDENSEALGS\n      if typeof(u) <: Number\n        k = f(t,u)\n      else\n        f(t,u,k)\n      end\n    end\n    @ode_savevalues\n    if fsal\n      reeval_fsal = true\n    end\n    dt *= dt_safety # Safety dt change\n  end\n\n  cursaveat,dt,t,T,reeval_fsal\nend"
},

{
    "location": "features/mesh.html#",
    "page": "Meshes",
    "title": "Meshes",
    "category": "page",
    "text": ""
},

{
    "location": "features/mesh.html#Meshes-1",
    "page": "Meshes",
    "title": "Meshes",
    "category": "section",
    "text": ""
},

{
    "location": "features/mesh.html#Mesh-Specification-1",
    "page": "Meshes",
    "title": "Mesh Specification",
    "category": "section",
    "text": "Finite element meshes are specified in the (node,elem) structure due to Long Chen. For the standard elements used in this package, we describe a geometric figure by a triangulation. The nodes are the vertices of the triangle and the elements are the triangles themselves. These are encoded as follows:Row i of node is an (xy) (or (xyz)) pair which specifies the coordinates of the ith node.\nRow j of elem are the indices of the nodes which make the triangle. Thus in 2D each row has three numbers.For example, to know the (xy) locations of the vertices of triangle j, we would see that node[elem[j,i],:] are the (xy) locations of the ith vertex for i=123.For more information, please see Programming of Finite Element Methods by Long Chen."
},

{
    "location": "features/mesh.html#Mesh-Type-1",
    "page": "Meshes",
    "title": "Mesh Type",
    "category": "section",
    "text": "FiniteElementDiffEq.FEMmesh\nFiniteElementDiffEq.SimpleMesh\nDiffEqBase.Mesh"
},

{
    "location": "features/mesh.html#Mesh-Generation-Functions-1",
    "page": "Meshes",
    "title": "Mesh Generation Functions",
    "category": "section",
    "text": "FiniteElementDiffEq.findboundary\nFiniteElementDiffEq.setboundary\nFiniteElementDiffEq.fem_squaremesh\nFiniteElementDiffEq.notime_squaremesh\nFiniteElementDiffEq.parabolic_squaremesh\nBase.size(::StokesDiffEq.FDMMesh)"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_bunny",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_bunny",
    "category": "Function",
    "text": "meshExample_bunny() : Returns a 3D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_flowpastcylindermesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_flowpastcylindermesh",
    "category": "Function",
    "text": "meshExample_flowpastcylindermesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_lakemesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_lakemesh",
    "category": "Function",
    "text": "meshExample_lakemesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_Lshapemesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_Lshapemesh",
    "category": "Function",
    "text": "meshExample_Lshapemesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_Lshapeunstructure",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_Lshapeunstructure",
    "category": "Function",
    "text": "meshExample_Lshapeunstructure() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_oilpump",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_oilpump",
    "category": "Function",
    "text": "meshExample_oilpump() : Returns a 3D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_wavymesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_wavymesh",
    "category": "Function",
    "text": "meshExample_wavymesh() : Returns a 2D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#DiffEqProblemLibrary.meshExample_wavyperturbmesh",
    "page": "Meshes",
    "title": "DiffEqProblemLibrary.meshExample_wavyperturbmesh",
    "category": "Function",
    "text": "meshExample_wavyperturbmesh() : Returns a 3D SimpleMesh.\n\n\n\n"
},

{
    "location": "features/mesh.html#Example-Meshes-1",
    "page": "Meshes",
    "title": "Example Meshes",
    "category": "section",
    "text": "DiffEqProblemLibrary.meshExample_bunny\nDiffEqProblemLibrary.meshExample_flowpastcylindermesh\nDiffEqProblemLibrary.meshExample_lakemesh\nDiffEqProblemLibrary.meshExample_Lshapemesh\nDiffEqProblemLibrary.meshExample_Lshapeunstructure\nDiffEqProblemLibrary.meshExample_oilpump\nDiffEqProblemLibrary.meshExample_wavymesh\nDiffEqProblemLibrary.meshExample_wavyperturbmesh"
},

{
    "location": "features/mesh.html#Plot-Functions-1",
    "page": "Meshes",
    "title": "Plot Functions",
    "category": "section",
    "text": "The plot functionality is provided by a Plots.jl recipe. What is plotted is a \"trisurf\" of the mesh. To plot a mesh, simply use:plot(mesh::Mesh)All of the functionality (keyword arguments) provided by Plots.jl are able to be used in this command. Please see the Plots.jl documentation for more information."
},

{
    "location": "features/output_specification.html#",
    "page": "Output Specification",
    "title": "Output Specification",
    "category": "page",
    "text": ""
},

{
    "location": "features/output_specification.html#Output-Specification-1",
    "page": "Output Specification",
    "title": "Output Specification",
    "category": "section",
    "text": "DifferentialEquations.jl allows for specifying many forms of output. The default is \"as verbose as possible\", with items saved to give a continuous interpolating function as the output for ease of use. However, all of this functionality can be toned down or turned off in order to improve performance and reduce the memory usage. This page is to describe the different techniques which can be employed to change the output specification. It will be described from the top down: the most powerful is continuous (dense) output, which can instead be used for step-wise interpolation via saveat, to using no interpolations and only save the timeseries at timeseries_steps, to finally turning save_timeseries=false to only save the value at the end."
},

{
    "location": "features/output_specification.html#Availability-1",
    "page": "Output Specification",
    "title": "Availability",
    "category": "section",
    "text": "Note that the dense and saveat functions (the functionality which involves interpolations) is currently only available for the ODE solvers. The other functionality is available with all solvers."
},

{
    "location": "features/output_specification.html#Continuous-(Dense)-Output-1",
    "page": "Output Specification",
    "title": "Continuous (Dense) Output",
    "category": "section",
    "text": "Continuous output is designated by the keyword argument dense. This is only available for the ODE solvers.  By default this is turned on with dense=true. At every timepoint it saves the appropriate derivative approximations sol.k in order to produce an interpolating function which is accessed directly by calling the solution object. For example, if sol is the solution object, the value at time t can be found viasol(t)Many of the special Runge-Kutta methods include a high-order interpolant which matches or is one less than the order of the solver. By default the other methods use an Order 3 Hermite interpolation. Since the k array must be stored, this has the highest memory requirement. Note that for methods which use extra steps for the high order interpolant that the extra steps are lazy evaluated and thus only computing when an interpolated value in the appropriate interval is requested"
},

{
    "location": "features/output_specification.html#Choosing-Intermediate-Locations-for-the-Solution-1",
    "page": "Output Specification",
    "title": "Choosing Intermediate Locations for the Solution",
    "category": "section",
    "text": "If dense solving is too high of a memory cost, one can specify values to be interpolated during the solving via the array saveat. For example, if we are solving on the interval tspan=[0,1], we can set saveat=[0.5] and the solver will ensure that an approximate value will be given at t=0.5. If this value is reached by the solver, it will be ignored. If the solver skips over this point, then an interpolated value is computed and saved for this point. This only requires saving the derivatives at two timesteps, and thus has a drastically reduced memory footprint than full dense output. Note that this, being associated with dense output, is only available for the ODE solvers.One fact to note is that saveat can be used even when save_timeseries=false. If this is done, then the only values that will be saved are the values chosen in saveat (matching Sundial's default behavior).Another way to specify an output location is to add that value to tspan. For example, we can force the solver to solve at 0.5 via tspan=[0,0.5,1]. However, notice that this will require that the solver actually hits t=0.5. In some cases this can slow down the solver by lowering the dt leading to extra steps. In some cases, this may be advantagous. For example, if you know that there is a large discontinuity at t=0.5, using tspan=[0,0.5,1] will force the solver to first solve on [0,0.5], and then continue to solve on [0.5,1]. This will give a much better approximation by perfectly specifying the moment of discontinuity, and can help the solver through tough regions."
},

{
    "location": "features/output_specification.html#Manually-Turning-on-the-Calculation-1",
    "page": "Output Specification",
    "title": "Manually Turning on the Calculation",
    "category": "section",
    "text": "The dense output storage can be turned on even if saveat and dense are not being used by setting calck=true. This can be useful for event handling since this will allow one to do the interpolations in the event even if you aren't saving the information for continuous dense output"
},

{
    "location": "features/output_specification.html#Timeseries-Specifications-1",
    "page": "Output Specification",
    "title": "Timeseries Specifications",
    "category": "section",
    "text": "To further reduce the memory usage, we can control the density that the timeseries is saved at. By default timeseries_steps=1, meaning that every step is saved. Note that timeseries_steps=1 is required for dense output to work correctly. If we change this value to timeseries_steps=n, then every nth step will be saved. Note that it will always have the first and final steps. We can turn off the saving of intermediate steps completely via the keyword save_timeseries=false. This can be used to minimize the memory usage."
},

{
    "location": "features/conditional_dependencies.html#",
    "page": "Conditional Dependencies",
    "title": "Conditional Dependencies",
    "category": "page",
    "text": ""
},

{
    "location": "features/conditional_dependencies.html#Conditional-Dependencies-1",
    "page": "Conditional Dependencies",
    "title": "Conditional Dependencies",
    "category": "section",
    "text": "DifferentialEquations.jl is conditionally dependent on some packages which may not be required for all users. The upside is that you can run DifferentialEquations.jl without installing these packages. However, the downside is that you will have to do the installation yourself (normal dependencies do a silent install). Luckily DifferentialEquations.jl warns you about missing dependencies when calling a method which requires one. This part of the manual will detail how to see if you're missing a conditional dependency and how to alleviate the issue."
},

{
    "location": "features/conditional_dependencies.html#The-Conditional-Dependency-Notification-1",
    "page": "Conditional Dependencies",
    "title": "The Conditional Dependency Notification",
    "category": "section",
    "text": "When a conditional dependency is required, DifferentialEquations.jl will import the package the first time the method is called. When this happens, you will receive a notification as follows:[DifferentialEquations.jl] Initializing backend: PkgNamewhere PkgName is the name of the package it is importing. DifferentialEquations.jl will then run a standard startup procedure on this package. If it fails, you will receive the messageWARNING: Couldn't initialize PkgName.  (might need to install it?)Most likely the issue is that you need to install the package. Go to the package's Github repository for information on installing the package, and then come back to try again. If that does not work, you may need the latest version of the package by checking out master:Pkg.checkout(\"PkgName\")If all else fails, please ask for help on via the repository Gitter."
},

{
    "location": "features/conditional_dependencies.html#What-Methods-Require-Conditional-Dependencies?-1",
    "page": "Conditional Dependencies",
    "title": "What Methods Require Conditional Dependencies?",
    "category": "section",
    "text": "That's a good question! The implicit algorithms implemented in DifferentialEquations.jl require NLsolve.jl. Also, the load function for the premade meshes requires JLD.jl.Lastly, there is a special conditional dependency for Juno. If you are using Juno, then the progress bar functionality is works. If you're not using Juno, then it won't do anything.The other conditional dependencies are external solvers wrapped by DifferentialEquations.jl. Currently these include:ODE.jl\nODEInterface.jl"
},

{
    "location": "features/conditional_dependencies.html#Installation-Instructions-1",
    "page": "Conditional Dependencies",
    "title": "Installation Instructions",
    "category": "section",
    "text": "For most of the conditional dependencies, the installation instructions are standard. However, for some of the newest features, special instructions may be required. The best way to stay up-to-date on this information is to checkout the following resources:The packages which are conditional dependencies and use a standard installation can be found in the /test/REQUIRE file.\nAny special installation instructions are handled via the ci_setup.jl file.The current special installation instructions are as follows:"
},

{
    "location": "features/conditional_dependencies.html#ODE.jl-1",
    "page": "Conditional Dependencies",
    "title": "ODE.jl",
    "category": "section",
    "text": "The wrapper currently only works on the development branch of ODE.jl at JuliaODE/ODE.jl. To install this version of ODE.jl, use the following commands:Pkg.clone(\"https://github.com/JuliaODE/ODE.jl\")"
},

{
    "location": "features/progress_bar.html#",
    "page": "Juno Progress Bar Integration",
    "title": "Juno Progress Bar Integration",
    "category": "page",
    "text": ""
},

{
    "location": "features/progress_bar.html#Juno-Progress-Bar-Integration-1",
    "page": "Juno Progress Bar Integration",
    "title": "Juno Progress Bar Integration",
    "category": "section",
    "text": "DifferentialEquations.jl integrates with the Juno progress bar in order to make long calculations more manageable. By default this feature is off for ODE and SDE solvers, but can be turned on via the keyword argument progressbar=true. The progress bar updates every progress_steps timesteps, which has a default value of 1000. Note that making this value really low could cause a performance hit, though from some basic testing it seems that with updates of at least 1000 steps on number (the fastest problems) there's no discernable performance degradation, giving an high upper bound.Note that the progressbar also includes a time estimate. This time-estimate is provided by linear extrapolation for how long it has taken to get to what percentage. For adaptive timestepping methods this should only be used as a rough estimate since the timesteps may (and will) change. By scrolling over the progressbar one will also see the current timestep. This can be used to track the solution's progress and find tough locations for the solvers."
},

{
    "location": "analysis/parameterized_functions.html#",
    "page": "ParameterizedFunctions",
    "title": "ParameterizedFunctions",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/parameterized_functions.html#ParameterizedFunctions-1",
    "page": "ParameterizedFunctions",
    "title": "ParameterizedFunctions",
    "category": "section",
    "text": ""
},

{
    "location": "analysis/parameterized_functions.html#Function-Definition-1",
    "page": "ParameterizedFunctions",
    "title": "Function Definition",
    "category": "section",
    "text": "DifferentialEquations.jl provides a set of macros for more easily and legibly defining your differential equations. It exploits the standard notation for mathematically writing differential equations and the notation for \"punching differential equations into the computer\"; effectively doing the translation step for you. This is best shown by an example. Say we want to solve the ROBER model. Using the @ode_def macro from ParameterizedFunctions.jl, we can do this by writing:using ParameterizedFunctions\nf = @ode_def ROBERExample begin\n  dy₁ = -k₁*y₁+k₃*y₂*y₃\n  dy₂ =  k₁*y₁-k₂*y₂^2-k₃*y₂*y₃\n  dy₃ =  k₂*y₂^2\nend k₁=>0.04 k₂=>3e7 k₃=>1e4This looks just like psudocode! The macro will expand this to the \"standard form\", i.e. the ugly computer form:f = (t,u,du) -> begin\n  du[1] = -0.04*u[1] + 1e4*u[2]*u[3]\n  du[2] = 0.04*u[1] - 3e7*u[2]^2 - 1e4*u[2]*u[3]\n  du[3] = 3e7*u[2]^2\nendNote that one doesn't need to use numbered variables: DifferentialEquations.jl will number the variables for you. For example, the follows defines the function for the Lotka-Volterra model:f = @ode_def LotkaVolterraExample begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=>1.5 b=>1.0 c=>3.0 d=1.0"
},

{
    "location": "analysis/parameterized_functions.html#Extra-Features-1",
    "page": "ParameterizedFunctions",
    "title": "Extra Features",
    "category": "section",
    "text": "Functions defined using the @ode_def macro come with many other features. For example, since we used => for a, b, and c, these parameters are explicitly saved. That is, one can dof.a = 0.2to change the parameter f to 0.2. We can create a new function with new parameters using the name we gave the macro:g = LotkaVolterraExample(a=0.3,b=20.3)In this case, c will default to the value we gave it in the macro.Since the parameters are explicit, these functions can be used to analyze how the parameters effect the model. Thus ParameterizedFunctions, when coupled with the solvers, forms the backbone of functionality such as parameter estimation, parameter sensitivity analysis, and bifurcation analysis."
},

{
    "location": "analysis/parameterized_functions.html#Extra-Optimizations-1",
    "page": "ParameterizedFunctions",
    "title": "Extra Optimizations",
    "category": "section",
    "text": "Because the ParameterizedFunction holds the definition at a symbolic level, optimizations are provided by SymEngine. Using the symbolic calculator, in-place functions for many things such as Jacobians, Hessians, etc. are symbolically pre-computed. In addition, functions for the inverse Jacobian, Hessian, etc. are also pre-computed. In addition, parameter gradients and Jacobians are also used.Normally these will be computed fast enough that the user doesn't have to worry. However, in some cases you may want to restrict the number of functions (or get rid of a warning). Macros like @ode_def_nohes turn off the Hessian calculations, and @ode_def_noinvjac turns of the Jacobian inversion. For more information, please see the ParameterizedFunctions.jl documentation."
},

{
    "location": "analysis/parameterized_functions.html#Finite-Element-Method-Macros-1",
    "page": "ParameterizedFunctions",
    "title": "Finite Element Method Macros",
    "category": "section",
    "text": "The other macro which is currently provided is the @fem_def macro. This macro is for parsing and writing FEM functions. For example, in the FEM methods you have to use x[:,1] instead of x and x[:,2] instead of y. The macro will automatically do this replacement, along with adding in parameters. Since FEM functions are more general, we also have to give it the function signature. Using the macro looks like this:f  = @fem_def (x) DataFunction begin\n  sin(α.*x).*cos(α.*y)\nend α=>π\n\na = 2π\nb = 8π*π\ngD = @fem_def (x) DirichletBC begin\n  sin(α.*x).*cos(α.*y)/β\nend α=>a β=>bThis is equivalent to the definitionf(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])\ngD(x) = sin(2π.*x[:,1]).*cos(2π.*x[:,2])/(8π*π)The true power comes in when dealing with nonlinear equations. The second argument, which we skipped over as (), is for listing the variables you wish to define the equation by. Mathematically you may be using u,v,w, etc., but for array-based algorithms you need to use u[:,1],u[:,2],etc. To avoid obfuscated code, the @fem_def macro does this conversion. For example:l = @fem_def (t,x,u) begin\n  du = ones(length(u))-α*u\n  dv = ones(length(v))-v\nend α=>0.5says there are two equations, one for u: (ones(length(u))-α*u) and one for v: (ones(length(v))-v). This expands to the equationl = (t,x,u)  -> [ones(size(x,1))-.5u[:,1]   ones(size(x,1))-u[:,2]]When you have 10+ variables, using @fem_def leads to code which is much easier to read!"
},

{
    "location": "analysis/parameter_estimation.html#",
    "page": "Parameter Estimation",
    "title": "Parameter Estimation",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/parameter_estimation.html#Parameter-Estimation-1",
    "page": "Parameter Estimation",
    "title": "Parameter Estimation",
    "category": "section",
    "text": "Parameter estimation for ODE models is provided by the DiffEq suite. The current functionality includes build_optim_objective and lm_fit. Note these require that the problem is defined using a ParameterizedFunction."
},

{
    "location": "analysis/parameter_estimation.html#build_optim_objective-1",
    "page": "Parameter Estimation",
    "title": "build_optim_objective",
    "category": "section",
    "text": "build_optim_objective builds an objective function to be used with Optim.jl.build_optim_objective(prob,tspan,t,data;loss_func = L2DistLoss,kwargs...)The first argument is the DEProblem to solve. Second is the tspan. Next is t, the set of timepoints which the data is found at. The last argument which is required is the data, which are the values where are known, in order to be optimized against. Optionally, one can choose a loss function from LossFunctions.jl or use the default of an L2 loss. The keyword arguments are passed to the ODE solver."
},

{
    "location": "analysis/parameter_estimation.html#build_lsoptim_objective-1",
    "page": "Parameter Estimation",
    "title": "build_lsoptim_objective",
    "category": "section",
    "text": "build_lsoptim_objective builds an objective function to be used with LeastSquaresOptim.jl.build_lsoptim_objective(prob,tspan,t,data;kwargs...)The arguments are the same as build_optim_objective."
},

{
    "location": "analysis/parameter_estimation.html#lm_fit-1",
    "page": "Parameter Estimation",
    "title": "lm_fit",
    "category": "section",
    "text": "lm_fit is a function for fitting the parameters of an ODE using the Levenberg-Marquardt algorithm. This algorithm is really bad and thus not recommended since, for example, the Optim.jl algorithms on an L2 loss are more performant and robust. However, this is provided for completeness as most other differential equation libraries use an LM-based algorithm, so this allows one to test the increased effectiveness of not using LM.lm_fit(prob::DEProblem,tspan,t,data,p0;kwargs...)The arguments are similar to before, but with p0 being the initial conditions for the parameters and the kwargs as the args passed to the LsqFit curve_fit function (which is used for the LM solver). This returns the fitted parameters."
},

{
    "location": "analysis/parameter_estimation.html#Examples-1",
    "page": "Parameter Estimation",
    "title": "Examples",
    "category": "section",
    "text": "We choose to optimize the parameters on the Lotka-Volterra equation. We do so by defining the function as a ParmaeterizedFunction:f = @ode_def_nohes LotkaVolterraTest begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=>1.5 b=1.0 c=3.0 d=1.0\n\nu0 = [1.0;1.0]\ntspan = (0.0,10.0)\nprob = ODEProblem(f,u0,tspan)Notice that since we only used => for a, it's the only free parameter. We create data using the numerical result with a=1.5:sol = solve(prob,Tsit5())\nt = collect(linspace(0,10,200))\nrandomized = [(sol(t[i]) + .01randn(2)) for i in 1:length(t)]\nusing RecursiveArrayTools\ndata = vecvec_to_mat(randomized)Here we used vecvec_to_mat from RecursiveArrayTools.jl to turn the result of an ODE to a matrix.If we plot the solution with the parameter at a=1.42, we get the following:(Image: Parameter Estimation Not Fit)Notice that after one period this solution begins to drift very far off: this problem is sensitive to the choice of a.To build the objective function for Optim.jl, we simply call the build_optim_objective funtion:cost_function = build_optim_objective(prob,t,data,Tsit5(),maxiters=10000)Note that we set maxiters so that way the differential equation solvers would error more quickly when in bad regions of the parameter space, speeding up the process. Now this cost function can be used with Optim.jl in order to get the parameters. For example, we can use Brent's algorithm to search for the best solution on the interval [0,10] by:using Optim\nresult = optimize(cost_function, 0.0, 10.0)This returns result.minimum[1]==1.5 as the best parameter to match the data. When we plot the fitted equation on the data, we receive the following:(Image: Parameter Estimation Fit)Thus we see that after fitting, the lines match up with the generated data and receive the right parameter value.We can also use the multivariate optimization functions. For example, we can use the BFGS algorithm to optimize the parameter starting at a=1.42 usingresult = optimize(cost_function, [1.42], BFGS())Note that some of the algorithms may be sensitive to the initial condtion. For more details on using Optim.jl, see the documentation for Optim.jl."
},

{
    "location": "analysis/sensitivity.html#",
    "page": "Sensitivity Analysis",
    "title": "Sensitivity Analysis",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/sensitivity.html#Sensitivity-Analysis-1",
    "page": "Sensitivity Analysis",
    "title": "Sensitivity Analysis",
    "category": "section",
    "text": "Sensitivity analysis for ODE models is provided by the DiffEq suite."
},

{
    "location": "analysis/sensitivity.html#Local-Sensitivity-Analysis-1",
    "page": "Sensitivity Analysis",
    "title": "Local Sensitivity Analysis",
    "category": "section",
    "text": "The local sensitivity of the solution to a parameter is defined by how much the solution would change by changes in the parameter, i.e. the sensitivity of the ith independent variable to the jth parameter is fracpartial ypartial p_j.The local sensitivity is computed using the sensitivity ODE:fracddtfracpartial upartial p_j=fracpartial fpartial yfracpartial ypartial p_j+fracpartial fpartial p_j=Jcdot S_j+F_jwhereJ=left(beginarraycccc\nfracpartial f_1partial y_1  fracpartial f_1partial y_2  cdots  fracpartial f_1partial y_k\nfracpartial f_2partial y_1  fracpartial f_2partial y_2  cdots  fracpartial f_2partial y_k\ncdots  cdots  cdots  cdots\nfracpartial f_kpartial y_1  fracpartial f_kpartial y_2  cdots  fracpartial f_kpartial y_k\nendarrayright)is the Jacobian of the system,F_j=left(beginarrayc\nfracpartial f_1partial p_j\nfracpartial f_2partial p_j\nvdots\nfracpartial f_kpartial p_j\nendarrayright)are the parameter derivatives, andS_j=left(beginarrayc\nfracpartial y_1partial p_j\nfracpartial y_2partial p_j\nvdots\nfracpartial y_kpartial p_j\nendarrayright)is the vector of sensitivities. Since this ODE is dependent on the values of the independent variables themselves, this ODE is computed simultaneously with the actual ODE system."
},

{
    "location": "analysis/sensitivity.html#Defining-a-Sensitivity-Problem-1",
    "page": "Sensitivity Analysis",
    "title": "Defining a Sensitivity Problem",
    "category": "section",
    "text": "To define a sensitivity problem, simply use the ODELocalSensitivityProblem type instead of an ODE type. Note that this requires a ParameterizedFunction with a Jacobian. For example, we generate an ODE with the sensitivity equations attached for the Lotka-Volterra equations by:f = @ode_def_nohes LotkaVolterraSensitivity begin\n  dx = a*x - b*x*y\n  dy = -c*y + d*x*y\nend a=>1.5 b=>1 c=>3 d=1\n\nprob = ODELocalSensitivityProblem(f,[1.0;1.0],(0.0,10.0))This generates a problem which the ODE solvers can solve:sol = solve(prob,DP8())Note that the solution is the standard ODE system and the sensitivity system combined. Therefore, the solution to the ODE are the first n components of the solution. This means we can grab the matrix of solution values like:x = vecvec_to_mat([sol[i][1:sol.prob.indvars] for i in 1:length(sol)])Since each sensitivity is a vector of derivatives for each function, the sensitivities are each of size sol.prob.numvars. We can pull out the parameter sensitivities from the solution as follows:da=[sol[i][sol.prob.numvars+1:sol.prob.numvars*2] for i in 1:length(sol)]\ndb=[sol[i][sol.prob.numvars*2+1:sol.prob.numvars*3] for i in 1:length(sol)]\ndc=[sol[i][sol.prob.numvars*3+1:sol.prob.numvars*4] for i in 1:length(sol)]This means that da[i][1] is the derivative of the x(t) by the parameter a at time sol.t[i]. Note that all of the functionality available to ODE solutions is available in this case, including interpolations and plot recipes (the recipes will plot the expanded system).Since the closure returns a vector of vectors, it can be helpful to use vecvec_to_mat from RecursiveArrayTools.jl in order to plot the solution.plot(sol.t,vecvec_to_mat(da),lw=3)(Image: Sensitivity Solution)Here we see that there is a periodicity to the sensitivity which matches the periodicity of the Lotka-Volterra solutions. However, as time goes on the sensitivity increases. This matches the analysis of Wilkins in Sensitivity Analysis for Oscillating Dynamical Systems."
},

{
    "location": "analysis/dev_and_test.html#",
    "page": "Algorithm Development and Testing",
    "title": "Algorithm Development and Testing",
    "category": "page",
    "text": ""
},

{
    "location": "analysis/dev_and_test.html#Algorithm-Development-and-Testing-1",
    "page": "Algorithm Development and Testing",
    "title": "Algorithm Development and Testing",
    "category": "section",
    "text": "Algorithm developing and testing tools are provided by DiffEqDevTools.jl and are documented in the developer documentation."
},

]}