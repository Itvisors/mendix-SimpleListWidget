// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package testsimplelistwidget.proxies;

public enum QueryAction
{
	count(new java.lang.String[][] { new java.lang.String[] { "en_US", "count" } }),
	total_quantity(new java.lang.String[][] { new java.lang.String[] { "en_US", "total quantity" } }),
	total_amount(new java.lang.String[][] { new java.lang.String[] { "en_US", "total amount" } }),
	list_quantities(new java.lang.String[][] { new java.lang.String[] { "en_US", "list quantities" } }),
	list_amounts(new java.lang.String[][] { new java.lang.String[] { "en_US", "list amounts" } });

	private java.util.Map<java.lang.String, java.lang.String> captions;

	private QueryAction(java.lang.String[][] captionStrings)
	{
		this.captions = new java.util.HashMap<java.lang.String, java.lang.String>();
		for (java.lang.String[] captionString : captionStrings)
			captions.put(captionString[0], captionString[1]);
	}

	public java.lang.String getCaption(java.lang.String languageCode)
	{
		if (captions.containsKey(languageCode))
			return captions.get(languageCode);
		return captions.get("en_US");
	}

	public java.lang.String getCaption()
	{
		return captions.get("en_US");
	}
}