# Learn with Trailhead: Tips for Building Salesforce with Lightning Components

This document lists the steps to reproduce the demo I presented in the Dreamforce 17 session. This includes any "behind scnes" actions I tool previous to the session.

## Before The Session:
### Optional Steps
1. Sign up for a DevHub ORG here: https://developer.salesforce.com/promotions/orgs/dx-signup 
2.	Connect the new DevHub ORG to your local SFDX
```
sfdx force:auth:web:login -d -a DF17_LCSFDX_DevHub
```
### Required Steps
1.	Create a folder with the project contents
```
cd <Your Root Folder>
git clone https://github.com/eltoroit/DF17_LCSFDX.git
cd DF17_LCSFDX
```

2.	Create a Scratch ORG
```
sfdx force:org:create -s -f config/project-scratch-def.json -a DF17_LCSFDX
```

3.	Set default user
```
sfdx force:config:set defaultusername=DF17_LCSFDX
```

4. Load initial state, where the Scratch ORG is created with basic configuration
```
git checkout START
sfdx force:source:push
sfdx force:user:permset:assign -n "Expense_Tracker"
sfdx force:data:tree:import --sobjecttreefiles data/Expense__c.json
```

5. Open the ORG
```
sfdx force:org:open
```
After the ORG is opened, perform these steps:
   1. Open Developer Console
   2. Open ExpenseListApp
   3. Click Preview

## During The Session:
Step #1: Retrieve records via a SOQL query in Apex
```
git checkout DEMO1
sfdx force:source:push
```
Step #2: Display information about each expense by nesting component inside the <aura:iteration />
```
git checkout DEMO2
sfdx force:source:push
```
Step #3: Event to request saving an expense record
```
git checkout DEMO3
sfdx force:source:push
```
Step #4: Updates record via a DML command in Apex
```
git checkout DEMO4
sfdx force:source:push
```
Step #5: Make application available in Salesforce1
1. Edit ExpenseListAppBuilder
```
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
    <c:ExpenseList />
</aura:component>
```
2. Create new App Page
   1. Open Lightning App Builder
   2. New Page (App Page)
   3. One Column
   4. Drag ExpenseListAppBuilder
   5. Activate
   6. Add it to Salesforce1
   7. Move it to top
   
3. View it the Salesforce App simulator
   1. Open new browser tab in Chrome
   2. Right Click > Inspect > Enable mobile rendering
   3. Navigate to /one/one.app
   4. Show tab in Salesforce1
   
4. View it in Lightning Experience
   1. Disable mobile rendering and refresh
   2. Show tab in Lightning Experience
