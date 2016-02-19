angular.module('paginator.service',[])
.service('paginatorService',[ '$rootScope' , paginatorService]);

/*
 * handle pagination
 */
function paginatorService($rootScope) {

        
        this.page = 0;
        this.rowsPerPage = 50;
        this.itemCount = 0;
        this.displayPagesButton = 5;

        this.setCurrentPage = function (page) {
            if (page > this.totalPageCount()) {
                return;
            }
            this.page = page;
        };

        this.nextPage = function () {
            if (this.isLastPage()) {
                return;
            }

            this.page++;
        };

        this.perviousPage = function () {
            if (this.isFirstPage()) {
                return;
            }

            this.page--;
        };

        this.firstPage = function () {
            this.page = 0;
        };

        this.lastPage = function () {
            this.page = this.totalPageCount() - 1;
        };

        this.isFirstPage = function () {
            return this.page == 0;
        };

        this.isLastPage = function () {
            return this.page == this.totalPageCount() - 1;
        };

        this.totalPageCount = function () {
            return Math.ceil(parseInt(this.itemCount) / parseInt(this.rowsPerPage));
        };
        
        this.pageStartFrom = function() { 
            
            var startPage = 0;
            var pageDifference = this.totalPageCount() - this.displayPagesButton;
            
            if (pageDifference > 0) { 
                if (this.page > pageDifference + 1) { 
                    return pageDifference; 
                } 
                startPage = this.page - (Math.ceil(this.displayPagesButton/2) - 1); 
                if(startPage > 0) {
                    return startPage;
                } else {
                    startPage = 0;
                }
            }
            return startPage;
            
        };
  
};