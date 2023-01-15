
        $(document).ready(function () {
    
            let i = 1;
    
            $("#btnAdd").click(function () {
    
                let newHtml = GetHtml().replace("$[Id]", i++).replace("$[Name]",  $("#txtname").val()).replace("$[Age]",  $("#txtAge").val()).replace("$[role]", $("#ddlRole option:selected").val()).replace("$[action]", "Edit").replace("$[Delete]", "Delete");
    
                $("#table_td").append(newHtml);
                document.getElementById("crudForm").reset();
    
            });
    
     
    
            $("#btnUpdate").click(function () {
                let newHtml = GetHtml().replace("$[Id]", $("#txtId").val()).replace("$[Name]", $("#txtname").val()).replace("$[Age]",  $("#txtAge").val()).replace("$[role]", $("#ddlRole option:selected").val()).replace("$[action]", "Edit").replace("$[Delete]", "Delete");
    
                $("#table_td").append(newHtml);
    
                $("#btnAdd").show();
    
                $("#btnUpdate").hide();
    
                $("#txtId").val('');
    
                $("#txtname").val('');
    
                $("#txtAge").val('');

                $("#ddlRole option:selected").val('Select')
            });
    
            $(document).on("click", "#A_Edit", function () {
    
                $("#btnAdd").hide();
    
                $("#btnUpdate").show();
    
                $("#txtId").show();
    
                $("#txtId").val($(this).parent().parent().find('.Id').html());
    
                $("#txtname").val($(this).parent().parent().find('.Name').html());

                $("#txtAge").val($(this).parent().parent().find('.Age').html());
    
                $("#ddlRole option:selected").val($(this).parent().parent().find('.role').html())
    
                $(this).parents("tr").remove();
    
                $("#btnUpdate").focus();
    
     
    
            });
    
            $(document).on("click", "#A_delete", function () {
    
                $(this).parents("tr").remove();
    
            });
        });

        function GetHtml() {
    
            return "<tr><td class='Id'>$[Id]</td>"
    
            + "<td class='Name'>$[Name]</td>"

            + "<td class='Age'>$[Age]</td>"
    
            + "<td class='role'>$[role]</td>"
    
            + "<td class='action'><a href='#' id='A_Edit'> $[action] </a> <a href='#' id='A_delete'>| $[Delete]</a></td></tr>";
    
        }
