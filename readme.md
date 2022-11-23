# Minimal Web API - ASP.Net Core

This app was started with this command `dotnet new web -o FruitEaterDotNet`.

Then the required routes were added.

## Static files

To enable static files a `wwwroot` directory was created.

And this configuration was added:

```c#
app.UseDefaultFiles();
app.UseStaticFiles();
```

## Using Rest Client

Install the `Rest Client` VS Code plugin.
See the existing calls in `calls.http`