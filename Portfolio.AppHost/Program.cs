var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Portfolio_Server>("portfolio-server");

builder.Build().Run();
