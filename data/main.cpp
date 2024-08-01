#include <iostream>
using namespace std;

class Book {
    public:
        string title;
        bool avail1;
        int page;

        Book (string aTitle, bool aAvail1, int aPage){
            title = aTitle;
            avail1 = aAvail1;
            page = aPage;
        }

};

int main()
{   
    Book book1("SampleName1", true, 9);


    cout << "hell0!" << endl;

    cout << book1.title;
    return 0;
}

