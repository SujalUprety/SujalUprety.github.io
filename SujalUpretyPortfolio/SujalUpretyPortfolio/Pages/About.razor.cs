using Microsoft.AspNetCore.Components;

namespace SujalUpretyPortfolio.Pages;

public partial class About : ComponentBase {
    
    private string activeTab = "skills";
    
    private void OnTab(string tabname) => activeTab = tabname;
    
}