package Dfdfdf_1112.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dfdfdf_1112.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Отделы
 */
@Entity(name = "IISDfdfdf_1112Отделы")
@Table(schema = "public", name = "Отделы")
public class Otdely {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодОт")
    private Integer кодот;

    @Column(name = "Наименование")
    private String наименование;


    public Otdely() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодОт() {
      return кодот;
    }

    public void setКодОт(Integer кодот) {
      this.кодот = кодот;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}